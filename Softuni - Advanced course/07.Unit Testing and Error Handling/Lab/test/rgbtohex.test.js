const { expect  } = require("chai");
const { rgbToHexColor } = require('../06.RGBToHex');

describe('test for RGB to hex problem', () => {

    it('Should return undefined if given values exceed 255', () =>{
        let red = 290;
        let green = 180;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values exceed 255', () =>{
        let red = 180;
        let green = 290;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values exceed 255', () =>{
        let red = 200;
        let green = 180;
        let blue = 290;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values are <0', () =>{
        let red = 255;
        let green = 180;
        let blue = -200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values <0', () =>{
        let red = 180;
        let green = -255;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if gisven values are <0', () =>{
        let red = -200;
        let green = 180;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values are not a Number', () =>{
        let red = 'red';
        let green = 180;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values are not a Number', () =>{
        let red = 200;
        let green = 'green';
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return undefined if given values are not a Number', () =>{
        let red = 200;
        let green = 180;
        let blue = 'blue';

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.undefined;
    });

    it('Should return a String', () =>{
        let red = 200;
        let green = 180;
        let blue = 150;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });

    it('Should return the correct answer', () =>{
        let red = 3;
        let green = 232;
        let blue = 252;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.equal('#03E8FC');
    });

    it('Should work if given input is = 0', () =>{
        let red = 0;
        let green = 180;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });

    it('Should work if given input is = 0', () =>{
        let red = 180;
        let green = 0;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });

    it('Should work if given input is = 0', () =>{
        let red = 200;
        let green = 180;
        let blue = 0;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });

    it('Should work if given input is = 255', () =>{
        let red = 255;
        let green = 180;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });

    it('Should work if given input is = 255', () =>{
        let red = 180;
        let green = 255;
        let blue = 200;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });

    it('Should work if given input is = 255', () =>{
        let red = 200;
        let green = 180;
        let blue = 255;

        let result = rgbToHexColor(red, green, blue);

        expect(result).to.be.a('string');
    });
});