const fs = require('fs');
const path = require('path');
const inlineCss = require('inline-css');

const inputPath = path.join(__dirname, 'cypress/reports/index.html');
const outputPath = path.join(__dirname, 'cypress/reports/inlined-index.html');

const html = fs.readFileSync(inputPath, 'utf8');

inlineCss(html, { url: ' ' })
  .then(inlinedHtml => {
    fs.writeFileSync(outputPath, inlinedHtml);
    console.log('CSS inlined successfully');
  })
  .catch(err => {
    console.error('Error inlining CSS:', err);
  });
