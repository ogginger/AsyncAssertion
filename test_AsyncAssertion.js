//test_AsyncAssertion.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "AsyncAssertion",
  "tests/AsyncAssertion_CustomComparisonService_ResolvesTrue",
  "tests/AsyncAssertion_EquivalentObjects_ResolvesTrue",
  "tests/AsyncAssertion_SimplePassingTest_ResolvesTrue"
], function(
  TestSuite,
  log,
  AsyncAssertion,
  AsyncAssertion_CustomComparisonService_ResolvesTrue,
  AsyncAssertion_EquivalentObjects_ResolvesTrue,
  AsyncAssertion_SimplePassingTest_ResolvesTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_AsyncAssertion initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncAssertion" );
	xTestSuite.add( AsyncAssertion_CustomComparisonService_ResolvesTrue );
	xTestSuite.add( AsyncAssertion_EquivalentObjects_ResolvesTrue );
	xTestSuite.add( AsyncAssertion_SimplePassingTest_ResolvesTrue );
      xTestSuite.test();
    }
  });
});
