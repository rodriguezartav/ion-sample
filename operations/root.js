var moment = require("moment");
var errors = require("throw.js");
var Numeral = require("numeral");
var Promise = require("bluebird");
var ErrorHelper = require("../proton81/error");
var Ajv = require('ajv');


class Model {

  constructor(knex, user) {
    this.user = user;
    this.knex = knex;
    this.tableName = "producto";
  };

  get allowPublic() {
    return true;
  }

  test() {
    return Promise.resolve({
      success: true
    })
  }
}



module.exports = Model;
