
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test-6', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test-6', async function() {
    await driver.get("https://www.power.fi/checkout/")
    await driver.manage().window().setRect({ width: 1066, height: 906 })
    await driver.findElement(By.css(".mb-spacer-mini > img")).click()
  })
  
})


