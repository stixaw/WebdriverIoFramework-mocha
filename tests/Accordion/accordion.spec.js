require('it-each')({ testPerIteration: true });

describe("WebdriverUniversity waitForText tests", () => {
    before(() => {
        browser.url('/Accordion/index.html');
    });

    it("should have LOADING.. PLEASE WAIT.. as text", () => {
        browser.waitUntil(() => $("#text-appear-box").isVisible(), 10000, "expected testBox to be visible");
        expect($("#text-appear-box").getText()).to.equal("LOADING.. PLEASE WAIT..");
    });

    it("should verify text area has text", () => {
        browser.waitForText("#hidden-text", 2000);
        expect($('#hidden-text').getText()).to.not.be.empty;
    });

    it("should show loading complete", () => {
        browser.waitUntil(() => $("#text-appear-box").getText() === "LOADING COMPLETE.", 20000, "expected text to be Loading Complete");
        expect($("#text-appear-box").getText()).to.equal("LOADING COMPLETE.");
    });
});

