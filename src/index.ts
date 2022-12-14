// Credits :- https://github.com/jonschlinkert/is-number/blob/master/index.js

export function isNumber(num: any) {
    // typeof NaN is 'number' but NaN - NaN == NaN
    // typeof Infinity is 'number but Infinity - Infinity === NaN
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string') {
        if (num.trim() === '') { // empty strings => false
            return false;
        } else {
            return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
        }
    }
    return false;
  }