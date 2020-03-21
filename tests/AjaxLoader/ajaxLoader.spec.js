describe("Ajax Loader", () => {
    let url;

    it("should go to Ajax-Loader Page", () => {
        browser.url('/Ajax-Loader/index.html');
        $('#button1').waitForVisible(10000)
        // browser.waitUntil(() => $('#button1').isVisible(), 10000);
        url = browser.getUrl();
        expect(url).to.equal("http://www.webdriveruniversity.com/Ajax-Loader/index.html");
    });

    it("should click on button1", () => {
        browser.click('#button1');
        $('.modal-body').waitForVisible(10000);
        // browser.waitUntil(() => $('.modal-body').isVisible(), 10000);
        expect($('.modal-body').isVisible()).to.be.true;
    });
});