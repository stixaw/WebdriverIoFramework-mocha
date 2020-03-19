require('it-each')({ testPerIteration: true });

describe("WebdriverUniversity isExisting tests", () => {
    before(() => {
        browser.url("/Hidden-Elements/index.html");
    });

    it("should open the hidden elements page", () => {
        expect(browser.getUrl()).to.contain("/Hidden-Elements");
    });

    it.each(["#button1", "#button2", "#button3"], "%s should exist", ['element'], (element, next) => {
        // expect(browser.isExisting(`${element}`)).to.be.true;
        expect($(element).isExisting()).to.be.true;
    });

    it("should exist and is visible", () => {
        expect(browser.isExisting("h1")).to.be.true;
    });

    it("should not have an element of #no-such-element", () => {
        // expect(browser.isExisting("#no-such-element")).to.be.false;
        expect($("#no-such-element").isExisting()).to.be.false;
    });
})