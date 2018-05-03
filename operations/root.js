var moment = require("moment");
var errors = require("throw.js");
var Numeral = require("numeral");
var Promise = require("bluebird");
var ErrorHelper = require("../proton81/error");
var Ajv = require('ajv');


function Model(knex, user) {
  this.user = user;
  this.knex = knex;
};

Model.table_name = "factura";
Model.prototype.table_name = "factura";

Model.prototype.test = function(body) {

  return Promise.resolve({
    success: true
  })
}

module.exports = Model;
