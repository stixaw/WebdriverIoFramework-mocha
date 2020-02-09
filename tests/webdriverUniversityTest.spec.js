// WebdriverIo with mocha and chai

describe("Webdriver University Home page", () => {
    describe("Links", () => {
        let url, title;

        describe("When contact us link is selected", () => {
            it("should open the webdriver university page", () => {
                browser.setViewportSize({
                    width: 1200,
                    height: 800
                })
                browser.url('/');
                browser.waitUntil(() => $('#contact-us').isVisible(), 5000);
                url = browser.getUrl();
                expect(url).to.equal("http://www.webdriveruniversity.com/");
            });

            it("should go to contact us page", () => {
                browser.click('#contact-us');
                browser.pause(1000);
                title = browser.getTitle();
                expect(title).to.equal('WebDriverUniversity.com');
            })
        });

        describe("when the log in button is clicked", () => {
            it("should open the Webdriver University home page", () => {
                browser.url('/');
                browser.waitUntil(() => $('#login-portal').isVisible(), 5000);
                url = browser.getUrl();
                url.should.equal("http://www.webdriveruniversity.com/");
            });

            it("navigate to the log in portal page", () => {
                browser.click('#login-portal');
                browser.pause(1000);
                title = browser.getTitle();
                title.should.equal('WebDriverUniversity.com');
            });

        });
    });
});