// Write a function that implements filtering in array
'use strict';
const values = [null, true, {}, { name: 'Elon' }, '', NaN, 0];

function filterFalsyValues() {
  function falsey() {
    const falseyValues = values.filter((e) => {
      if (!e) {
        e;
      }
    });
  }
  return falsey;
}
let falseyVal = filterFalsyValues(values);
console.log(falseyVal());
