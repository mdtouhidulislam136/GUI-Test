const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test-5', function() {
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
  it('test-5', async function() {
    await driver.get("https://www.power.fi/puhelimet-ja-kamerat/puhelimet/apple-iphone-12-pro-128-gt-grafiitti/p-1128149/")
    await driver.manage().window().setRect({ width: 1066, height: 906 })
    await driver.executeScript("window.scrollTo(0,106)")
    await driver.executeScript("window.scrollTo(0,500)")
    await driver.findElement(By.css(".btn-mega")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css(".ng-star-inserted > .secondary")).click()
    await driver.findElement(By.css(".modal-header > .close")).click()
    await driver.executeScript("window.scrollTo(0,1357.3333740234375)")
    await driver.findElement(By.css(".pwr-icon-cart")).click()
    await driver.findElement(By.css(".pwr-icon-trash")).click()
    await driver.findElement(By.css(".line-quantity-button-minus")).click()
  })
})


