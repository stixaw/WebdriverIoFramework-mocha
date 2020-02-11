# WebdriverIoFramework-mocha
WebdriverIo Framework setup from scratch using mocha and selenium-standalone

### Using 
    Node.js 8.11.3 and npm
    "mocha": "^5.2.0",
    "selenium-standalone": "^6.15.3",
    "wdio-mocha-framework": "^0.6.4",
    "wdio-selenium-standalone-service": "0.0.12",
    "webdriverio": "^4.13.2"

### WebdriverIOv4
http://v4.webdriver.io/

### Selenium Standalone Setup:
From within the project directory run this command:
npm install -save-dev webdriverio@4.13.2 selenium-standlone@6.15.3

### Install Selenium server:
./node_modules/.bin/selenium-standalone install

### To run selenium-standalone in gitbash window (must keep gitbash window open):
./node_modules/.bin/selenium-standalone start

#### if error starting up server:
* netstat -ano | findstr :4444 to see what is running on the port
* taskkill /PID XXXXX /F (XXXX is the taskId)

http://127.0.0.1:4444/wd/hub/static/resource/hub.html in browser to access the selenium standalone server

## Wdio.conf file creation:
From within project directory using VSCode terminal or MAC terminal (gitbash is not interactive):
./node_modules/.bin/wdio triggers the creation of the file

### responses:
* on my local machine
* mocha framework
* install framwork adapter Yes
* testlocation: ./tests/**/*.js
* dot reporter is default, spec and allure are popular
* selenium-standalone service
* level of logging silent
* screenshots use default
* baseUrl www.webdriveruniversity.com

This will install the wdio package, and wdio.conf is created in your project.

### To run the Tests manually
Start Selenium-standalone:
```./node_modules/.bin/selenium-standalone start```

### Run the wdio command to execute tests
```./node_modules/.bin/wdio```

## Mocha Framework
Uses describes and it to organize tests

## Wdio conf using Sync mode will run and execute commands in sequence:
sync: true
tests have been written for sync mode

## Wdio and NPM Script automating start of selenium standalone and excuting scripts in specified environment:
WDIO will start selenium-standalone-server through services:
* line 114 services: ['selenium-standalone'],

### install selenium-standalone-server
```npm install wdio-selenium-standalone-service -save-dev```

### to Run Tests using CLI
modify package.json:
```
  "scripts": {
    "test": "wdio"
  },
```

### command to exectute tests now:
```npm test```

### For environment specifications:
Wdio modification:
```
let baseUrl;

if(process.env.SERVER === 'prod'){
    baseUrl = 'https://www.google.com';
} else {
    baseUrl = 'http://www.webdriveruniversity.com';
}
```
### Usage:
*define environment:*
``` SERVER=prod npm test ```

### only run one spec file
``` npm test -- --spec=tests/chai.spec.js ```

*npm test will default to webdriveruniversity.com*

### Logging during runtime
from within your project and command line:
``` npm test -- --logLevel=verbose ```

this will have logging output to the bash/terminal window

## Node Assertions:
https://nodejs.org/api/assert.html

sample test:
```
const assert = require('assert');

var actual = 1;
var expected = 2;

assert.equal(actual, expected);
```


## Chai Assertions:
https://www.chaijs.com

npm install chai@latest -save-dev

* foo.should.equal('bar');
* expect(foo).to.equal('bar');
* assert.equal(foo, 'bar');

sample test:
```
const assert = require('chai').assert; 
const expect = require('chai').expect; 
const should = require('chai').should(); 

const actual = 1;
const expected = 2;
const ringer = 1;

describe("Checkint equality", () => {
    it("asser tactual not equal expected", () => {
        assert.notEqual(actual, expected);
    });
    it("expect actual to not equal expected", () => {
        expect(actual).to.not.equal(expected);
    });
    it("actual should equal ringer", () => {
        actual.should.equal(ringer);
    });
});
```

### Centralizing Assertions using wdio.conf

```
    before: function (capabilities, specs) {
        expect = require('chai').expect;
        should = require('chai').should();
    },
```
adding this to wdio in the before function allows all tests spec files to use the exect/should

### Wdio time out override in tests:
in wdio file:
```
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
```
in test the overrid:

``` this .timeout(20000); ```

## Pause Command:
this is a fixed timeout or explicit wait

``` browser.pause(milliseconds) ```

#### browser.pause is not best practise
should use when pausible or implicit:
``` browser.waitUnil(() => element.isVisible(), milliseconds); ```

## Debug mode for teets:
using:
``` browser.debug() ```

To enable debug mode:

edit wdio.conf file to extend the waitFor Timeout:
add environmental variable
```
let timeout = process.env.DEBUG ? 999999 : 10000;
```

this allows us to extend the time out when using the npm command:
``` 
DEBUG=true npm test -- --spec=webdriverUniversityTest.spec.js
```
when the test hits the browser.debug():

```
.
[21:03:33]  DEBUG       Queue has stopped!
[21:03:33]  DEBUG       You can now go into the browser or use the command line as REPL
[21:03:33]  DEBUG       (To exit, press ^C again or type .exit)

>

End selenium sessions properly ...
(press ctrl+c again to hard kill the runner)
```

## Selectors

Can use these tools in Chrome to help selector selection:
* Ranorex selocity
* POM Builder
* Selenium IDE
* ChroPath

## Target Specific Tests (Exclusive Tests)

The use of .only with describes or it will run only that Describe set of tests or that singular test.

```
describe.only("exclusive exectution this set of tests", () => {});

it.only("exclusive exectuion of this test", () => {})
```

## Skipping specific Tests
```
describe.skip("exclusive exectution this set of tests", () => {});

it.skip("exclusive exectuion of this test", () => {})
```

### Note on package.json:
to have spec reporters for webdriver:
* "@wdio/allure-reporter": "^5.7.11",
* "@wdio/reporter": "^5.7.8",
* "@wdio/spec-reporter": "^5.7.13",

#### usage in wdio.conf:
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./results/allure-results"
      }
    ]
  ],
  
### rimraf
 packag.json:
    * "rimraf": "^3.0.0",

#### usage in npm scripts in package.json:
* "clean:reports": "rimraf ./results/allure-results && rimraf ./results/*.png",
* "test:local": "npm run clean:reports && node getSecrets && wdio wdio.LocalChromeconf.js",
