# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @akshatha_kulkarni/lotide`

**Require it:**

`const _ = require('@akshatha_kulkarni/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element of an array.
* `tail(...)`: returns all the elements excluding the first(head element) of an array.
* `middle(...)`: returns the middle most element(s) of an array.
* `countLetters(...)`: returns a count of each of the letters when given a sentence (as a string).
* `countOnly(...)`: takes in a collection of items and return counts for a specific subset of those items.
* `eqArrays(...)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(...)`: takes in two objects and returns true or false, based on a perfect match.
* `findKey(...)`: takes in an object and a callback function and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(...)`: takes in an object and a value and returns the first key which contains the given value.
* `flatten(...)`: returns a single-level array when given an array with other arrays inside.
* `letterPosition(...)`: returns all the indices (zero-based positions) of the string where each character is found.
* `map(...)`: takes in an array to map and a callback function and returns a new array based on the results of the callback function.
* `takeUntil(...)`: returns a slice of the array with elements taken from the beginning.
* `without(...)`: returns a subset of a given array, removing unwanted elements.