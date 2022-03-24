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
  it('test-4', async function() {
    await driver.get("https://www.power.fi/apple/iphone/iphone-12-pro/?q=iphone%2012")
    await driver.manage().window().setRect({ width: 1066, height: 906 })
    await driver.sleep(5000)
    {
      const element = await driver.findElement(By.xpath("//swiper/div[2]"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.executeScript("window.scrollTo(0,8323.3330078125)")
    await driver.findElement(By.xpath("//picture/img")).click()
    await driver.executeScript("window.scrollTo(0,0)")
  })
})


