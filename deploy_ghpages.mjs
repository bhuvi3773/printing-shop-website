import { execSync } from 'child_process';

console.log('--- Publishing dist/ to gh-pages branch ---');

try {
  execSync('git add -f dist', { stdio: 'inherit' });
  const tree = execSync('git write-tree --prefix=dist/').toString().trim();
  console.log(`Tree hash: ${tree}`);
  const commit = execSync(`git commit-tree ${tree} -m "deploy: publish production build to gh-pages"`).toString().trim();
  console.log(`Commit hash: ${commit}`);
  execSync(`git push origin ${commit}:refs/heads/gh-pages --force`, { stdio: 'inherit' });
  execSync('git reset HEAD dist', { stdio: 'inherit' });
  console.log('✓ Successfully deployed to branch gh-pages on remote origin!');
} catch (err) {
  console.error('Deployment error:', err);
  process.exit(1);
}
