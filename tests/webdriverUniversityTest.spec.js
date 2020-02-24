// WebdriverIo with mocha and chai
require('it-each')({ testPerIteration: true });

describe("Webdriver University Home page", () => {
    describe("Links", () => {
        let url, title;

        describe("When contact us link is selected", () => {
            before(() => {
                browser.setViewportSize({
                    width: 1200,
                    height: 800
                });
                browser.url('/');
                browser.waitUntil(() => $('#contact-us').isVisible(), 5000);
            });
            
            after(() => {
                browser.close();
            });

            it("should open the webdriver university page", () => {
                url = browser.getUrl();
                expect(url).to.equal("http://www.webdriveruniversity.com/");
            });

            it("should go to contact us page", () => {
                // browser.debug();  (enable to use debug mode)
                browser.click('#contact-us');
                var tabIds = browser.getTabIds();

                browser.switchTab(tabIds[1]);
                browser.waitUntil(() => $("#contact_form").isVisible(), 5000);
                const newUrl = browser.getUrl();
                expect(newUrl).to.contain("/Contact-Us/contactus.html");
            })

            it("Should show the contactUs Form", () => {
                expect($("#contact_form").isVisible()).to.be.true;
            });
        });

        describe("when the log in button is clicked", () => {
            before(() => {
                browser.setViewportSize({
                    width: 1200,
                    height: 800
                });
                browser.url('/');
                browser.waitUntil(() => $('#login-portal').isVisible(), 5000);
            });

            after(() => {
                browser.close();
            });

            it("should open the Webdriver University home page", () => {
                url = browser.getUrl();
                url.should.equal("http://www.webdriveruniversity.com/");
            });

            it("navigate to the log in portal page", () => {
                browser.click('#login-portal');
                var tabIds = browser.getTabIds();

                browser.switchTab(tabIds[1]);
                browser.waitUntil(() => $("#text").isVisible(), 5000);
                const newUrl = browser.getUrl();
                expect(newUrl).to.contain("/Login-Portal/index.html")
            });

            it.each(["#text", "#password", "#login-button"], "%s should be visisble", ['element'], (element, next) => {
                expect($(element).isVisible()).to.be.true;
            })

        });
    });
});