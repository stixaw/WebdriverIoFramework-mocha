require('it-each')({ testPerIteration: true });

describe("Webdriveruniversity isSelected tests", () => {
    before(() => {
        browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    });

    it.each(["input[value='lettuce']", "option[value='apple']", "option[value='maven']", "input[value='option-2']"], "%s is not be selected", ['element'], (element, next) => {
        expect($(element).isSelected()).to.be.false;
    })

    it.each(["input[value='pumpkin']", "option[value='grape']", "option[value='java']","input[value='option-3']"], "%s is selected", ['element'], (element, next) => {
        expect($(element).isSelected()).to.be.true;
    })
});