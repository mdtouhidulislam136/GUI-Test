
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test-1', function() {
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
  it('test-1', async function() {
    await driver.get("https://www.power.fi/")
    await driver.manage().window().setRect({ width: 758, height: 891 })
    await driver.findElement(By.css(".ng-tns-c150-3 > .search-input")).click()
    await driver.findElement(By.css(".ng-tns-c150-3 > .search-input")).sendKeys("iphone 13 pro")
    await driver.findElement(By.css(".ng-tns-c150-3 > .search-input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".mb-spacer-mini > img")).click()
    await driver.findElement(By.css(".mb-spacer-mini > img")).click()
    await driver.executeScript("window.scrollTo(0,322)")
    await driver.findElement(By.css(".ng-star-inserted > img")).click()
  })
})


