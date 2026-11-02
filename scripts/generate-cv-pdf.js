#!/usr/bin/env node
// Prints the local CV page to files/Hillson_Ghimire_CV.pdf. Rerun after editing the CV.
//
// Usage, with `jekyll serve` running on port 4000:
//   npm install --no-save puppeteer-core
//   node scripts/generate-cv-pdf.js

const path = require('path');
const puppeteer = require('puppeteer-core');

const LOCAL = 'http://localhost:4000';
const LIVE = 'https://hillsonghimire.github.io';
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT = path.join(__dirname, '..', 'files', 'Hillson_Ghimire_CV.pdf');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', executablePath: CHROME });
  const page = await browser.newPage();
  await page.goto(`${LOCAL}/cv/`, { waitUntil: 'networkidle2' });
  await page.evaluate(async (local, live) => {
    await document.fonts.ready;
    document.querySelectorAll('a[href]').forEach((a) => {
      a.href = a.href.replace(local, live);
    });
    document.title = 'Hillson Ghimire - CV';
  }, LOCAL, LIVE);
  await page.pdf({ path: OUTPUT, printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log(`Wrote ${OUTPUT}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
