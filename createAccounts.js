
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const myArgs = process.argv.slice(2);
console.log('MyArgs: ', myArgs)

// puppeteer usage as normal
puppeteer.launch({ headless: false }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://target.com')
  await page.click('a[class="styles__PrimaryHeaderLink-sc-17dxxwu-4 styles__AccountStyledLinkNamedIcon-sc-17dxxwu-17 kBMAuO jcHzjq"]')
  await page.click('a[data-test="accountNav-createAccount"]')
  await page.waitForTimeout(750);
  await page.type('input[id="username"]', myArgs[0])
  await page.type('input[id="firstname"]', myArgs[1])
  await page.type('input[id="lastname"]', myArgs[2])
  await page.type('input[id="password"]', "password123")
  await page.click('button[id="createAccount"]')


})