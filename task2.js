// Write a function redundant that takes in a string str and returns a function that returns str.
'use strict';

const lovedFruit = function (fruit) {
  return function () {
    return console.log(`${fruit}`);
  };
};

let knowFruit = lovedFruit('Pearl');
knowFruit();
