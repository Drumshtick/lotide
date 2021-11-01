# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @erikkay/lotide`

**Require it:**

`const _ = require('@erikkay/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `assertArraysEqual(ar1, ar2)` : Compares two arrays with eqArrays and prints a reader friendly log
* `assertEqual(actual, expected)` : Compares if expected value === actual value
* `assertObjectsEqual(object1, object2)` : Compares two objects to ensure they are equal
* `countLetters(sentance)` : Counts the number of letters in a string then returns an object containing num of each letters occurrence
* `countOnly(allItems, itemsToCount)` ; Counts the number of occurances in an object with an object determining what to count
* `eqArrays(ar1, ar2)` : Ensure the arrays are entirely equal
* `eqObjects(object1, object2)` : Ensures the objects are entirely equal
* `findKeyByValue(objectToRead, valueToFind)` : Finds a key in an object based on value 
* `findKey(object, callback)` : Calls the callback function on each item until it returns true, returning that item
* `flatten(arr)` : Converts a 2d array into 1d
* `head(array)` : Returns the head of an array (first element)
* `letterPositions(sentence)` : Returns an object containing all the letter in a string with the number of occurrences
* `map(array, callback)` : callback is executed on each item in an array, returning the result
* `middle(arr)` : returns the middle array, one for odd, two for even length
* `tail(array` : Returns the tail of an array (everything minus first element)
* `takeUntil(array, callback)` : Returns items of the array up until the conditions of the callback function has been met
* `without(arSrc, itemsToRemoveAr)` : Removes the items to remove from the array