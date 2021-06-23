const fs = require('fs-extra');
const path = require('path');

const dest = path.resolve('build/public');
const html = path.join(dest, 'index.html');
const js   = path.join(dest, 'scripts/app.min.js');

fs.outputFileSync(js, 'foo');
fs.outputFileSync(html, 'bar');
