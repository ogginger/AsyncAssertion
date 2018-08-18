//AsyncAssertion_EquivalentObjects_ResolvesTrue.js: Testing logic.

define([
	"AsyncAssertion",
	"promise"
], function(
	AsyncAssertion,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncAssertion_EquivalentObjects_ResolvesTrue",
		"Input": {
			"Result": { "Property": "Value" },
			"ExpectedOutput": { "Property": "Value" },
			"Comparator": {
				"Object": true
			}
		},
		"Function": AsyncAssertion,
		"ExpectedOutput": true
	};
});
