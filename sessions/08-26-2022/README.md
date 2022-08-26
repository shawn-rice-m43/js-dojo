# 08 26 2022

Classes: Pseudo Array

Create a class that, once instantiated, produces a data structure that is functionally identical to an Array.

It needs to fulfill the following requirements:

- it accepts an optional comma-separated list of primitive values (string, number, boolean, undefined, null) as its starting values
- it has a `length` property that returns the number of elements it currently contains
- it has a `pop` method that removes the last element from an array and returns that element
- it has a `push` method that adds one or more elements to the end of an array and returns the new length of the array
- it has a `forEach` method that executes a provided function once for each array element
  - the index signature of the callback need only include the element - the index, array, and this args present in the native forEach can be omitted

_Stretch goals_

- it has a `concat` method that is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
