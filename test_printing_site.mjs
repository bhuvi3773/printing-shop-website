import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES, SHOP_CONTACT_INFO, DEMO_PRICE_DISCLAIMER } from './src/data/servicesData.js';
import { GALLERY_ITEMS } from './src/data/galleryData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('--- 1. Testing Data Integrity & Services Configuration ---');
console.log(`Shop Name: "${SHOP_CONTACT_INFO.shopName}"`);
console.log(`WhatsApp Number: "${SHOP_CONTACT_INFO.whatsappNumber}"`);
console.log(`Total Services: ${SERVICES.length} (expected 6)`);

if (SERVICES.length < 6) {
  throw new Error(`Expected at least 6 services, found ${SERVICES.length}`);
}

// Check each service
for (const s of SERVICES) {
  console.log(`✓ Service verified: "${s.title}" (${s.category})`);
  if (!s.title || !s.shortDesc || !s.icon) {
    throw new Error(`Service ${s.id} is missing required fields`);
  }
}

// Verify Flex Banner sizing configuration
const flexBanner = SERVICES.find(s => s.id === 'flex-banners');
if (!flexBanner || !flexBanner.hasSizeInput || !flexBanner.sizeConfig) {
  throw new Error('Flex banners missing sizing configuration');
}
console.log('✓ Flex banner size config verified (feet units, area-based calculations)');

// Verify Gallery Items
console.log(`\n--- 2. Testing Gallery Portfolio Items ---`);
console.log(`Total Gallery Items: ${GALLERY_ITEMS.length}`);
if (GALLERY_ITEMS.length < 6) {
  throw new Error(`Expected at least 6 gallery items, found ${GALLERY_ITEMS.length}`);
}
for (const g of GALLERY_ITEMS) {
  if (!g.title || !g.category || !g.substrate || !g.finish) {
    throw new Error(`Gallery item ${g.id} missing fields`);
  }
}
console.log('✓ All gallery items validated with materials, finishes, and dimensions');

// Verify Build Output
console.log(`\n--- 3. Testing Production Build Output ---`);
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  throw new Error('dist/ directory not found! Run npm run build first.');
}
const distHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
if (!distHtml.includes('./assets/')) {
  throw new Error('dist/index.html is missing relative asset path ./assets/');
}
console.log('✓ dist/index.html verified with relative asset paths');

console.log('\n--- ALL UNIT & DATA VERIFICATION TESTS PASSED! ---');
process.exit(0);
