// Create a function that implements partial sum
'use strict';
function MakeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let addOne = MakeAdder(1);
let addTen = MakeAdder(10);

console.log(addTen(2));
