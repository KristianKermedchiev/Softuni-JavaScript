let { assert } = require('chai');
let { isOddOrEven } = require('../02.evenOrOdd');

describe ('Tests for evenOrOdd', () => {

    // Checks input;
    it('Should return undefined if input is an array', ()=>{
        assert.equal(isOddOrEven([]), undefined);
    });
    it('Should return undefined if input is NaN', ()=>{
        assert.equal(isOddOrEven(NaN), undefined);
    });
    it('Should return undefined if input is Number', ()=>{
        assert.equal(isOddOrEven(9), undefined);
    });
    it('Should return undefined if input is Object', ()=>{
        assert.equal(isOddOrEven({}), undefined);
    });

    // Checks Odd result
    it('Should return even, if given one digit numbers as String', () =>{
        assert.equal(isOddOrEven('2'), 'odd');
    });

    it('Should return even, if given one digit numbers as String', () =>{
        assert.equal(isOddOrEven('3'), 'odd');
    });

    it('Should return even, if given one digit numbers as String', () =>{
        assert.equal(isOddOrEven('7'), 'odd');
    });


    // Checks Even result
    it('Should return even, if given 4 digit numbers as String', () =>{
        assert.equal(isOddOrEven('3333'), 'even');
    });

    it('Should return even, if given six digit numbers as String', () =>{
        assert.equal(isOddOrEven('777777'), 'even');
    });

    it('Should return even, if given eight digit numbers as String', () =>{
        assert.equal(isOddOrEven('99999999'), 'even');
    });
});