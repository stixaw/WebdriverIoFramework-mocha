describe("webdriver university home page css elements", () => {
    describe("Video panel", () => {
        it("should go to homepage", () => {
            browser.url('/');
            browser.waitUntil(() => $('#contact-us').isVisible(), 5000);
            url = browser.getUrl();
            expect(url).to.equal("http://www.webdriveruniversity.com/");
        });

        it("should have width of ", () => {
            const videoPanelWidth = browser.getCssProperty("#player", "width")
            expect(videoPanelWidth).to.be(50)
        });

        it("should have heigth of ", () => {
            const videoPanelWidth = browser.getCssProperty("#player", "height")
            expect(videoPanelWidth).to.be(50)
        });

    });
});