// Write a function that implements filtering in array
'use strict';
const values = [null, true, {}, { name: 'Elon' }, '', NaN, 0];

function filterFalsyValues(value) {
  function falsey() {
    const falseyValues = value.filter((e) => {
      if (!e) {
        e;
      }
    });
  }
  return falsey;
}
let falseyVal = filterFalsyValues([
  null,
  true,
  {},
  { name: 'Elon' },
  '',
  NaN,
  0,
]);
falseyVal();

function filterTruthyValues(value) {
  function truthy() {
    const truthyValues = value.filter((e) => {
      if (e) {
        e;
      }
    });
  }
  return truthy;
}
let truthyVal = filterTruthyValues([
  null,
  true,
  {},
  { name: 'Elon' },
  '',
  NaN,
  0,
]);
truthyVal();
