const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

function receivesAFunction(cb) {
  cb();
}

var fn = name
function returnsANamedFunction() {
  return function namedFunction() {
};
}

function returnsAnAnonymousFunction() {
    return function() {
    };
}
