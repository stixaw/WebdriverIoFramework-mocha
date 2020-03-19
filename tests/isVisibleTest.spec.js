require('it-each')({ testPerIteration: true });

describe("WebdriverUniversity isVisible tests", () => {
    before(() => {
        browser.url("/Hidden-Elements/index.html");
    });

    it("should open the hidden elements page", () => {
        expect(browser.getUrl()).to.contain("/Hidden-Elements");
    });

    it.each(["#button1", "#button2", "#button3"], "%s should not be visible", ['element'], (element, next) => {
        expect($(element).isVisible()).to.be.false;
    });

    it("header text should be visible", () => {
        expect($("h1").isVisible()).to.be.true;
    });
})