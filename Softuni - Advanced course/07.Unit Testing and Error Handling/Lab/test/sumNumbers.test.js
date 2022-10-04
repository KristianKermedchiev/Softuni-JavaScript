const { expect  } = require("chai");
const { sum } = require('../04.sumNumbers');

describe('Tests for sum', () => {
    it('should return true if given multiple types', () => {
        let arr = [true, 2, '3'];
        let result = sum(arr);
        expect(result).to.be.equal(6);
    });

    it('should return false if the input is not an Arr', () => {
        let arr = 'Not an Array'
        let result = sum(arr);
        expect(result).to.be.NaN;
    })
})