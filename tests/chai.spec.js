const assert = require('chai').assert; 
const expect = require('chai').expect; 
const should = require('chai').should(); 

const actual = 1;
const expected = 2;
const ringer = 1;

describe("Checkint equality", () => {
    it("asser tactual not equal expected", () => {
        assert.notEqual(actual, expected);
    });
    it("expect actual to not equal expected", () => {
        expect(actual).to.not.equal(expected);
    });
    it("actual should equal ringer", () => {
        actual.should.equal(ringer);
    });
});

