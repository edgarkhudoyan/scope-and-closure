// Write a function redundant that takes in a string str and returns a function that returns str.
'use strict';

function redundant(fruit) {
  return function () {
    return fruit;
  };
}

const f1 = redundant('Apple');
console.log(f1());

const f2 = redundant('Pearl');
console.log(f2());

const f3 = redundant('');
console.log(f3());
