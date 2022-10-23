import {isNumber} from '../index';

describe("isNumber", function() {
    it("should return true", function() {  
        expect(isNumber(1)).toBe(true);
        expect(isNumber(5e3)).toBe(true);      
        expect(isNumber(0xff)).toBe(true);        
        expect(isNumber(-1.1)).toBe(true);
        expect(isNumber(0)).toBe(true);   
        expect(isNumber(1)).toBe(true);   
        expect(isNumber(1.1)).toBe(true); 
        expect(isNumber(10)).toBe(true);  
        expect(isNumber(10.10)).toBe(true);
        expect(isNumber(100)).toBe(true); 
        expect(isNumber('-1.1')).toBe(true);           
        expect(isNumber('0')).toBe(true); 
        expect(isNumber('012')).toBe(true);
        expect(isNumber('0xff')).toBe(true);         
        expect(isNumber('1')).toBe(true); 
        expect(isNumber('1.1')).toBe(true);
        expect(isNumber('10')).toBe(true);
        expect(isNumber('10.10')).toBe(true);         
        expect(isNumber('100')).toBe(true);
        expect(isNumber('5e3')).toBe(true);
        expect(isNumber(parseInt('012'))).toBe(true);
        expect(isNumber(parseFloat('012'))).toBe(true);
        expect(isNumber(Number.EPSILON)).toBe(true);
    });

    it("should return false", function() {  
        expect(isNumber(Infinity)).toBe(false);
        expect(isNumber(-Infinity)).toBe(false);
        expect(isNumber(Number.NEGATIVE_INFINITY)).toBe(false);
        expect(isNumber(Number.POSITIVE_INFINITY)).toBe(false);
        expect(isNumber(NaN)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber('  ')).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber([2])).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(() => {})).toBe(false);
    });
  });