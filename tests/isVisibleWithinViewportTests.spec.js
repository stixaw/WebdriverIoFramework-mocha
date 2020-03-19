require('it-each')({ testPerIteration: true });

describe("WebdriverUniversity isVisibleWithinViewport tests", () => {
    before(() => {
        browser.url("/");
    });

    it("Contact us container should be Visible in the viewport", () => {
        expect($("#contact-us").isVisibleWithinViewport()).to.be.true;
    });

    it("should not be visible inthe viewport", () => {
        expect($("#to-do-list").isVisibleWithinViewport()).to.be.false;
    });

});