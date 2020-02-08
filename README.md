# WebdriverIoFramework-mocha
WebdriverIo Framework setup from scratch using mocha and selenium-standalone

Using 
    Node.js 8.11.3 and npm
    "mocha": "^5.2.0",
    "selenium-standalone": "^6.15.3",
    "wdio-mocha-framework": "^0.6.4",
    "wdio-selenium-standalone-service": "0.0.12",
    "webdriverio": "^4.13.2"

WebdriverIOv4
http://v4.webdriver.io/

Selenium Standalone Setup:
From within the project directory run this command:
npm install -save-dev webdriverio@4.13.2 selenium-standlone@6.15.3

Install Selenium server:
./node_modules/.bin/selenium-standalone install

To run selenium-standalone in gitbash window (must keep gitbash window open):
./node_modules/.bin/selenium-standalone start

if error starting up server:
netstat -ano | findstr :4444 to see what is running on the port
taskkill /PID XXXXX /F (XXXX is the taskId)

http://127.0.0.1:4444/wd/hub/static/resource/hub.html in browser to access the selenium standalone server

Wdio.conf file creation:
From within project directory using VSCode terminal or MAC terminal (gitbash is not interactive):
./node_modules/.bin/wdio triggers the creation of the file

responses:
on my local machine
mocha framework
install framwork adapter Yes
testlocation: ./tests/**/*.js
dot reporter
selenium-standalone service
level of logging silent
screenshots use default
baseUrl www.webdriveruniversity.com

this will install the sdio package, and wdio.conf is created in your project.

To run the Tests manually
Start Selenium-standalone:
./node_modules/.bin/selenium-standalone start

Run the wdio command to execute tests
./node_modules/.bin/wdio

Mocha Framework
Uses describes and it to organize tests

Wdio conf using Sync mode will run and execute commands in sequence:
sync: true
tests have been written for sync mode

Wdio and NPM Script automating start of selenium standalone and excuting scripts in specified environment:
WDIO will start selenium-standalone-server through services:
line 114 services: ['selenium-standalone'],

install selenium-standalone-server
npm install wdio-selenium-standalone-service -save-dev

to Run Tests using CLI
modify package.json:
```
  "scripts": {
    "test": "wdio"
  },
```

command to exectute tests now:
npm test

For environment specifications:
Wdio modification:
```let baseUrl;

if(process.env.SERVER === 'prod'){
    baseUrl = 'https://www.google.com';
} else {
    baseUrl = 'http://www.webdriveruniversity.com';
}
```
SERVER=prod npm test
npm test will default to webdriveruniversity.com





