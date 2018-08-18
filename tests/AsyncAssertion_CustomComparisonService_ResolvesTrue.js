//AsyncAssertion_CustomComparisonService_ResolvesTrue.js: Testing logic.

define([
	"AsyncAssertion",
	"promise"
], function(
	AsyncAssertion,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncAssertion_CustomComparisonService_ResolvesTrue",
		"Input": {
			"ComparisonFunction": function( Input ) {
				return promise(function( resolve ) {
					resolve( true );
				});
			}
		},
		"Function": AsyncAssertion,
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
	};
});
