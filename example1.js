const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('https://walmart.com/');
  await page.screenshot({path: 'oxylabs_1080.png'})
  await browser.close();
})();