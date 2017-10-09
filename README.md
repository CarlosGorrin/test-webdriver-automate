# test-webdriver-automate

To run locally

Install Node.js
Visit [Node.js](https://nodejs.org), identify installer. Download and proceed with instalation.

WebDriver for Chrome - [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/home) <br>

WebDriver for Firefox - [Geckodriver](https://github.com/mozilla/geckodriver/releases/tag/v0.19.0) <br>
Identify installer. Download and unzip.
In order to work, you need to Setup the PATH to the file executable.

Install Selenium Webdriver using npm.
```
npm install --save--dev selenium-webdriver
```

Run parallel using npm.
```
npm install wd-parallel
```

More info and documentation in [Webdriver.io] (http://webdriver.io/)
[GitHub Pages](https://pages.github.com/)

**About the test**

- [x] Create two simple tests with no less than five steps to test features of your choice on the webdriver.io page to get familiar with the framework API.
- [ ] Run the two tests in parallel
- [x] Implement a Custom reporter to display the data properly and in a way you are familiar with.
- [x] The final project should be uploaded to Github with a small README.MD file explaining how to run it locally.

I used Standalone Mode witch is a better suit for a small test. WDIO testrunner works better with bigger scales testing and has custom reporter options that can be selected while configuring wdio.config.js. <br>
The challenge was very clear and the documentation available is more than enough to avoid not having much technical problems. <br>
In my case, I ran out of time setting up Standalone and working on both tests, checking async options and reading documentation about it. And later going back to WDIO and continuing setting up the envioroments. But both implementation are working properly.
