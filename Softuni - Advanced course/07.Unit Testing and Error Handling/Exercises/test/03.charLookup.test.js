let { assert } = require('chai');
let { lookupChar } = require('../03.charLookup');

describe('Tests for lookupChar', ()=>{

    // Check if first input is not a String, but second input is correct;
    it('Should return undefined if either first input is not a String or second Input is not a Number', ()=>{
        assert.equal(lookupChar(NaN, 9), undefined);
    });
    it('Should return undefined if either first input is not a String or second Input is not a Number', ()=>{
        assert.equal(lookupChar({}, 9), undefined);
    });
    it('Should return undefined if either first input is not a String or second Input is not a Number', ()=>{
        assert.equal(lookupChar(0, 9), undefined);
    });

    //Check if first input is correct, but second input is not a Number;
    it('Should return undefined if either first input is not a String or second Input is not a Number', ()=>{
        assert.equal(lookupChar('1', '9'), undefined);
    });
    it('Should return undefined if either first input is not a String or second Input is not a Number', ()=>{
        assert.equal(lookupChar('2', {}), undefined);
    });
    it('Should return undefined if either first input is not a String or second Input is not a Number', ()=>{
        assert.equal(lookupChar('3', NaN), undefined);
    });


    //Checks if first string.length <= Index;
    it('Should return Incorrect index if first input.length < second input.', ()=>{
        assert.equal(lookupChar('1', 2), 'Incorrect index');
    });
    it('Should return Incorrect index if first input.length < second input.', ()=>{
        assert.equal(lookupChar('22', 2), 'Incorrect index');
    });
    it('Should return Incorrect index if first input.length < second input.', ()=>{
        assert.equal(lookupChar('3', -1), 'Incorrect index');
    });

    //Checks if index < 0;
    it('Should return Incorrect index second input < 0.', ()=>{
        assert.equal(lookupChar('1', -1), 'Incorrect index');
    });

    // Cheks if index is an integer;
    it('Should return undefined if string is an integer', ()=>{
        assert.equal(lookupChar('2.2', 2.2), undefined);
    });

    // Cheks if the result is correct;
    it('Should return 2', ()=>{
        assert.equal(lookupChar('332', 2), 2);
    });
    it('Should return 5', ()=>{
        assert.equal(lookupChar('332345', 5), 5);
    });
    it('Should return 9', ()=>{
        assert.equal(lookupChar('123456789', 8), 9);
    });
});