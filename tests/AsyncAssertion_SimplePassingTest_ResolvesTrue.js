//AsyncAssertion_SimplePassingTest_ResolvesTrue.js: Testing logic.

define([
	"AsyncAssertion",
	"promise"
], function(
	AsyncAssertion,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncAssertion_SimplePassingTest_ResolvesTrue",
		"Input": {
			"Result": true,
			"ExpectedOutput": true
		},
		"Function": AsyncAssertion,
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
	};
});
