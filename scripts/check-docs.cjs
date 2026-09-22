const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const config = JSON.parse(fs.readFileSync(path.join(root, 'context7.json')));
assert(config.rules.every((rule) => rule.length <= 255));
for (const match of readme.matchAll(/\]\(([^)]+)\)/g)) {
  const link = match[1].split('#')[0];
  if (link && !/^(https?:|mailto:)/.test(link)) {
    assert(fs.existsSync(path.join(root, link)), link);
  }
}
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/manifest.json')));
assert.equal(manifest.manifest_version, 3);
assert(readme.includes('browser extension'));
assert(readme.includes('npm does not install a browser extension'));
assert(readme.includes('@lomray/react-mobx-manager@4.5.2'));
assert(readme.includes('plugins/dev-extension/index.js'));
const source = fs.readFileSync(path.join(root, 'public/content.js'), 'utf8');
assert(source.includes('window.__MOBX_STORE_MANAGER__'));
assert.equal(config.branch, 'prod');
console.log('README/extension identity checks PASS (not a browser session)');
