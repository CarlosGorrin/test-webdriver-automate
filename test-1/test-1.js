const {Builder, By, Key, promise, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://webdriver.io')
	.then(_ =>
        driver.getTitle().then(function(title) {console.log(title)}))
    .then(_ =>
        driver.findElement(By.className('header')))
    .then(_ =>
        driver.findElement(By.className('standalone')))
    .then(_ =>
        driver.findElement(By.tagName("input")).sendKeys('The Browser Object'), 1000)
    .then(_ => 
    	driver.quit());
    console.log('Test running');
   
