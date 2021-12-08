// Write a function which remove elements with length <= 3
'use strict';
function filterByLength(value) {
  const filtered = [];
  const filter = value.filter((e) => {
    if (e.length > 3) {
      filtered.push(e);
    }
  });
  return filtered;
}

console.log(filterByLength(['kia', 'tesla', 'bmw', 'mercedes']));
