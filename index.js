const puppeteer = require('puppeteer');

const url = process.argv[2];
const target = process.argv[3];
const output = process.argv[4] || "output.png";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  await page.goto(url);
  await page.waitForSelector(target);
  const el = await page.$(target);
  await el.screenshot({ path: output });
  await browser.close();
})();
