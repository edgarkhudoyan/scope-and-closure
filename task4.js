// Create a function printAfter that calls its argument after printing hello world
'use strict';

function printAfter(name) {
  console.log('Hello, world');

  const print = () => {
    console.log(name);
  };

  print();
}

printAfter('Elon Musk');
