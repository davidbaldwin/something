"use strict";

var something = require("./life.js");


exports.test_Add1to2 = function(test) {
	var actual = something.doSomething(1, 2);
    test.equal(actual, 3);
    test.done();
};
