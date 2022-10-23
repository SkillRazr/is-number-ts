// Credits :- https://github.com/jonschlinkert/is-number/blob/master/index.js

export function isNumber(num: any) {
    // typeof NaN is 'number' but NaN !== NaN
    if (num === Infinity || num === -Infinity) {
        return false;
    }
    if (typeof num === 'number') {
        return num === num;
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