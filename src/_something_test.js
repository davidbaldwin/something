"use strict";

var something = require("./something.js");


exports.test_Add1to2 = function(test) {
	something.doSomething(1, 2, function(numeral) {
		test.equal(numeral, 3);
		test.done();
	});
};
