var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.get('http://webdriver.io')
    .then(_ => 
    	driver(title('WebdriverIO - WebDriver bindings for Node.js'), 1000))
    .then(_ =>
        driver.findElement(By.className('header')))
    .then(_ =>
        driver.findElementBy.tagName('input').sendKeys('THE BROWSER OBJECT', Key.RETURN))
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    console.log('Working properly!');
   