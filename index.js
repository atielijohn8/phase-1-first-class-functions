// index.js

// 1. receivesAFunction
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction
function returnsANamedFunction() {
  return function namedFunction() {
    return "I'm a named function!";
  };
}

// 3. returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  return () => "I'm an anonymous function!";
}
