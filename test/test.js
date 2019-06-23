const { assert } = require('chai');
const { UpperCase, Encrypt } = require("../routes/transforms");

describe('transformTest()', function() {
  var tests = [
     {args: "teststring", expected: "TESTSTRING"},
     {args: "TestString", expected: "TESTSTRING"},
     {args: "teststring@123", expected: "TESTSTRING@123"},
     {args: "TESTSTRING@1234", expected: "TESTSTRING@1234"}
  ];

  tests.forEach(function(test) {
    it('correctly transforms', function() {
      var res = UpperCase(test.args);
      assert.equal(res, test.expected);
    });
  });
});


describe('encryptTest()', function() {
  var tests = [
     {args: "teststring", expected: "eyJhbGciOiJIUzI1NiJ9.dGVzdHN0cmluZw.YMcekBk5ixUUyvm1ZSY9X8yS_YFKigeocgm2S7HzO88"}
  ];

  tests.forEach(function(test) {
    it('correctly transforms ' + ' args', function() {
      var res = Encrypt(test.args);
      assert.equal(res, test.expected);
    });
  });
});

