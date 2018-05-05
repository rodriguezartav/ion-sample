require("dotenv").config();
var chai = require('chai');
var should = chai.should();

//Our parent block
describe('Root Operation', () => {



  it('it should return success', function(done) {

    var Ion = require("../proton81/service/apiTester");

    Ion.Operation("root", "test", {})
      .then(function(result) {
        result.success.should.equal(true);
        done();
      })

  });

});
