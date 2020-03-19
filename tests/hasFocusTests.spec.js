require('it-each')({ testPerIteration: true });

describe("Webdriveruniversity hasFocus tests", () => {
    before(() => {
        browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    });

    it("should have focus checkbox Option1 after it is checked", () => {
        const option1 = $("input[value='option-1']");
        option1.click();
        expect(option1.hasFocus()).to.be.true;
    });

    it("should not have focus on checkbox Option3", () => {
        const option3 = $("input[value='option-3']");
        expect(option3.hasFocus()).to.be.false;
    })
});