# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @victorwdfp/lotide`

**Require it:**

`const _ = require('@victorwdfp/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(const head = require("./head");)`: implements head of an array
* `function2(const tail = require("./tail");)`: implements tail of an array
* `function3(const middle = require("./middle");)`: implements middle index of an array
* `function4(const assertEqual = require("./assertEqual");)`: asserts that 2 arguments are equal
* `function5(const assertArraysEqual = require("./assertArraysEqual");)`: asserts if 2 arrays are equal
* `function6(const eqArrays = require("./eqArray");)`: determines if 2 arrays are equal in length and elements