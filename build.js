//build.js: Configuration file for optimizing the AsyncAssertion function. 
/*
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"bIsObjectEqual": "lib/is_object_equal.min"
    },
    exclude: [ "rsvp", "underscore", "promise" ],
    name: "AsyncAssertion",
    out: "async_assertion.min.js"
})
