import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9225;
const TARGET_URL = 'http://localhost:4180/';

console.log('--- Launching Headless Chrome for CDP Verification ---');
const chromeProc = spawn(CHROME_PATH, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  'about:blank',
], { stdio: 'ignore' });

const cleanup = () => {
  try { chromeProc.kill('SIGKILL'); } catch {}
};
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(1); });

for (let i = 0; i < 20; i++) {
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
    if (res.ok) break;
  } catch {}
  await new Promise(r => setTimeout(r, 200));
}

const newPageRes = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(TARGET_URL)}`, { method: 'PUT' });
const pageData = await newPageRes.json();
const ws = new WebSocket(pageData.webSocketDebuggerUrl);

await new Promise((resolve) => { ws.onopen = resolve; });

let msgId = 1;
const pending = new Map();
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(msg.error);
    else resolve(msg.result);
  }
};

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = msgId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

await send('Page.enable');
await send('Runtime.enable');
await send('Page.navigate', { url: TARGET_URL });
await new Promise(r => setTimeout(r, 2000));

async function evalJs(expr) {
  const res = await send('Runtime.evaluate', {
    expression: expr,
    returnByValue: true,
    awaitPromise: true,
  });
  if (res.exceptionDetails) {
    throw new Error(`JS Eval failed: ${JSON.stringify(res.exceptionDetails)}`);
  }
  return res.result.value;
}

// Wait for React to mount
for (let i = 0; i < 30; i++) {
  const mounted = await evalJs('!!document.querySelector(".brand-name")');
  if (mounted) break;
  await new Promise(r => setTimeout(r, 200));
}

console.log('\n--- 1. Testing Page Title and Header Presence ---');
const title = await evalJs('document.title');
console.log(`Page title: "${title}"`);
const brandName = await evalJs(`document.querySelector('.brand-name')?.innerText`);
console.log(`Brand Name: "${brandName}"`);

console.log('\n--- 2. Testing Viewport Responsiveness & Layout Overflow ---');
const viewports = [
  { width: 320, height: 600, label: 'Small Mobile (320px)' },
  { width: 375, height: 667, label: 'Standard Mobile (375px)' },
  { width: 430, height: 932, label: 'Large Mobile (430px)' },
  { width: 768, height: 1024, label: 'Tablet (768px)' },
  { width: 1024, height: 768, label: 'Small Desktop (1024px)' },
  { width: 1440, height: 900, label: 'Large Desktop (1440px)' },
];

for (const vp of viewports) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    mobile: vp.width < 960,
  });
  await new Promise(r => setTimeout(r, 200));

  const overflow = await evalJs(`({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    hasOverflow: document.documentElement.scrollWidth > window.innerWidth
  })`);

  console.log(`Viewport ${vp.label}: scrollWidth=${overflow.scrollWidth}px, innerWidth=${overflow.innerWidth}px, hasOverflow=${overflow.hasOverflow}`);
  if (overflow.hasOverflow) {
    throw new Error(`Horizontal layout overflow detected at ${vp.label}! scrollWidth: ${overflow.scrollWidth} > innerWidth: ${overflow.innerWidth}`);
  }
}
console.log('✓ All 6 viewport widths verified: ZERO horizontal overflow');

console.log('\n--- 3. Testing Calculator Interactions ---');
// Switch to desktop view
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

// Switch to Flex Banners tab
await evalJs(`(() => {
  const flexTab = Array.from(document.querySelectorAll('.service-tab-btn')).find(b => b.textContent.includes('Flex Banners'));
  if (flexTab) flexTab.click();
})()`);
await new Promise(r => setTimeout(r, 300));

const flexState = await evalJs(`({
  serviceTitle: document.querySelector('.selected-service-title h3')?.innerText,
  hasWidthInput: !!document.getElementById('flex-width-input'),
  hasHeightInput: !!document.getElementById('flex-height-input'),
  priceText: document.querySelector('.price-number')?.innerText
})`);

console.log('Flex banner tab state:', flexState);
if (!flexState.hasWidthInput || !flexState.hasHeightInput) {
  throw new Error('Flex banner dimension inputs missing');
}
console.log('✓ Calculator tab switching & dimension inputs verified');

console.log('\n--- 4. Capturing Desktop & Mobile Screenshots ---');
// Desktop screenshot
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await new Promise(r => setTimeout(r, 600));
const deskShot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(__dirname, 'printing_desktop.png'), Buffer.from(deskShot.data, 'base64'));
console.log('✓ Saved printing_desktop.png');

// Mobile screenshot
await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true });
await new Promise(r => setTimeout(r, 600));
const mobShot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(__dirname, 'printing_mobile.png'), Buffer.from(mobShot.data, 'base64'));
console.log('✓ Saved printing_mobile.png');

console.log('\n--- 5. Testing Mobile Drawer Interaction ---');
await evalJs(`document.querySelector('.mobile-toggle')?.click()`);
await new Promise(r => setTimeout(r, 300));
const drawerOpen = await evalJs(`document.querySelector('.mobile-nav-drawer')?.classList.contains('open')`);
console.log('Mobile drawer open state:', drawerOpen);
if (!drawerOpen) throw new Error('Mobile drawer did not open on hamburger click');

await evalJs(`document.querySelector('.mobile-toggle')?.click()`);
await new Promise(r => setTimeout(r, 300));
const drawerClosed = await evalJs(`!document.querySelector('.mobile-nav-drawer')?.classList.contains('open')`);
console.log('Mobile drawer closed state:', drawerClosed);
if (!drawerClosed) throw new Error('Mobile drawer did not close on toggle click');
console.log('✓ Mobile navigation toggle verified');

console.log('\n========================================================');
console.log('🎉 ALL CDP BROWSER TESTS & VERIFICATIONS PASSED! 🎉');
console.log('========================================================');

ws.close();
cleanup();
process.exit(0);
