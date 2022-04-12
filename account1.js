
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: false }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://target.com')
  await page.click('a[class="styles__PrimaryHeaderLink-sc-17dxxwu-4 styles__AccountStyledLinkNamedIcon-sc-17dxxwu-17 kBMAuO jcHzjq"]')
  await page.click('a[class="Link__StyledLink-sc-4b9qcv-0 styles__ListLink-sc-5oc0g9-2 eaEvPH egWFZH"]')
  await page.waitForTimeout(1500);
  await page.type('input[class="Input__StyledInput-sc-1hug1ai-0 styles__AuthInput-sc-137ce2q-2 hbxLXq"]', "itspersonal@gmaildomain.com")
  await page.type('input[id="password"]', "password123")
  await page.click('button[id="login"]')
  await page.waitForTimeout(500);
  await browser.close()

})