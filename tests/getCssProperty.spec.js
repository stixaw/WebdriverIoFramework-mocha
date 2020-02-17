describe("webdriver university home page css elements", () => {
    describe("Video panel", () => {
        it("should go to homepage", () => {
            browser.url('/');
            browser.waitUntil(() => $('#contact-us').isVisible(), 5000);
            url = browser.getUrl();
            expect(url).to.equal("http://www.webdriveruniversity.com/");
        });

        it("should have width of ", () => {
            const videoPanelWidth = browser.getCssProperty("#udemy-promo-thumbnail", "width");
            expect(videoPanelWidth.value).to.equal('910px');
        });

        it("should have height of ", () => {
            const videoPanelHeight = browser.getCssProperty("#udemy-promo-thumbnail", "height");
            expect(videoPanelHeight.value).to.equal('240px');
        });

    });
});

