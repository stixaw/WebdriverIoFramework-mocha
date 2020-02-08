describe("Webdriver University Home page", () => {
    describe("Links", () => {
        let url;

        describe("When contact us link is selected", () => {
            it("should open the contact us page", () => {
                browser.url('/')
                browser.waitUntil(() => $('#contact-us').isVisible(), 5000)
                browser.click('#contact-us')
                browser.pause(1000)
                url = browser.getUrl()
                console.log('Url is: ' + url);
            });
        });

        describe("when the log in button is clicked", () => {
            it("should open the login portal page", () => {
                browser.url('/')
                browser.waitUntil(() => $('#login-portal').isVisible(), 5000)
                browser.click('#login-portal')
                browser.pause(1000)
                url = browser.getUrl()
                console.log('Url is: ' + url);
            });

        });
    });
});