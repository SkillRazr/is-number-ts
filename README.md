# is-number-ts [![NPM version](https://img.shields.io/npm/v/is-number-ts.svg?style=flat)](https://www.npmjs.com/package/is-number-ts) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-number-ts.svg?style=flat)](https://npmjs.org/package/is-number-ts) [![NPM total downloads](https://img.shields.io/npm/dt/is-number-ts.svg?style=flat)](https://npmjs.org/package/is-number-ts)

> Returns true if the value is a finite number.

TS implementation of the popular package [is-number](https://www.npmjs.com/package/is-number) 
by [Jon Schlinkert](https://github.com/jonschlinkert)

Do checkout 
[SkillRazr](https://skillrazr.com)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-number-ts
```

## Usage

```nodejs
const { isNumber } = require("is-number-ts");
console.log(isNumber('3s')); // false


browser
const { isNumber } from "is-number-ts";
console.log(isNumber('3')); // true
```

## Tests 

Jasmine is used for the unit tests. 
``` npm run test ``` 