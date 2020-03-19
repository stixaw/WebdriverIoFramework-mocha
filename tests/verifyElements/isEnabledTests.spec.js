require('it-each')({ testPerIteration: true });

describe("WebdriverUniversity isEnabled tests", () => {
    before(() => {
        browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    });

    it("dropdown value orange should not be enabled", () => {
        expect(browser.isEnabled("option[value='orange']")).to.be.false;
    });

    it("dropdown value grape should be enabled", () => {
        expect(browser.isEnabled("option[value='grape']")).to.be.true;
    });

    it("cabbage radio button should not be enabled", () => {
        expect($("input[value='cabbage']").isEnabled()).to.be.false;
    });

    it("pumpkin radio button should be enabled", () => {
        expect($("input[value='pumpkin']").isEnabled()).to.be.true;
    });
});