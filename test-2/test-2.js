const {Builder, By, Key, promise, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://webdriver.io')
    .then(_ =>
        driver.findElement(By.className('logo')))
    .then(_ =>
        driver.findElement(By.className('getstarted')).click())
    .then(_ => 
        driver.wait(until.titleIs('WebdriverIO - Developer Guide'), 3000).then(function(title) {console.log(title)}))
    .then(_ =>
        driver.findElement(By.id("Let’s-get-serious")))
    .then(_ => 
        driver.quit());
    console.log("It's alive");
   
