const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test-3', function() {
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
  it('test-3', async function() {
    await driver.get("https://www.power.fi/")
    await driver.manage().window().setRect({ width: 1049, height: 920 })
    await driver.findElement(By.xpath("//form/input")).sendKeys("iphone 12")
    await driver.findElement(By.linkText("iPhone 12 Pro")).click()
    await driver.executeScript("window.scrollTo(0,492)")
  })
})


