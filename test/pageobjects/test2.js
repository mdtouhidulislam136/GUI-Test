const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test-2', function() {
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
  it('test-2', async function() {
    await driver.get("https://www.power.fi/")
    await driver.manage().window().setRect({ width: 1064, height: 906 })
    await driver.findElement(By.xpath("//form/input")).click()
    await driver.findElement(By.xpath("//form/input")).sendKeys("iphone 12 pro")
    await driver.findElement(By.xpath("//form/input")).sendKeys(Key.ENTER)
    await driver.executeScript("window.scrollTo(0,1498.6666259765625)")
    await driver.executeScript("window.scrollTo(0,2300)")
    await driver.executeScript("window.scrollTo(0,3500)")
    await driver.executeScript("window.scrollTo(0,5006)")
    await driver.findElement(By.css(".full-width > .pwr-btn")).click()
    await driver.executeScript("window.scrollTo(0,5800)")
    await driver.findElement(By.css(".ng-star-inserted:nth-child(39) .mb-spacer-solo")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,81.33333587646484)")
  })
})


