//AsyncAssertion.js: Functional Logic.

define([
	"promise",
	"underscore",
	"bIsObjectEqual"
], function(
	promise,
	_,
	bIsObjectEqual
) {
  return function( Input ) {
	return promise(function( resolve ) {
		if ( _.has( Input, "ComparisonFunction" ) ) {
			Input.ComparisonFunction( Input ).then(function( Result ) {
				resolve( Result );
			});
		} else if (
			_.has( Input, "Comparator" ) &&
			_.has( Input.Comparator, "Object" ) &&
			Input.Comparator.Object === true
		) {
			resolve(
				bIsObjectEqual({
					"Comparator": Input.Result,
					"Comparand": Input.ExpectedOutput
				})
			);
		} else {
			resolve( Input.Result === Input.ExpectedOutput );
		}
	});
  };
});
