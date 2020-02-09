var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .setViewportSize({
    	width: 1200,
    	height: 800
    })
    .url('http://www.webdriveruniversity.com/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .click('#contact-us')
    .pause(3000)
    .end();