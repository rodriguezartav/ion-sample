var AWS = require("aws-sdk");
var codebuild = new AWS.CodeBuild();

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
    this.allowPublic = true;
  };


  commit(body) {
    var parts = body.repository.full_name.split("/");
    var user = parts[0];
    var repo = parts[1];

    var params = {
      projectName: "apibuilder",
      /* required */

      environmentVariablesOverride: [{
          name: 'GIT_REPO',
          /* required */
          value: repo,
          /* required */
          type: "PLAINTEXT"
        }, {
          name: 'GIT_USER',
          /* required */
          value: user,
          /* required */
          type: "PLAINTEXT"
        }, {
          name: 'DB_PASSWORD',
          /* required */
          value: '1qazxsw2',
          /* required */
          type: "PLAINTEXT"
        }, {
          name: 'NODE_ENV',
          /* required */
          value: 'staging',
          /* required */
          type: "PLAINTEXT"
        },
        /* more items */
      ],


    };
    return codebuild.startBuild(params).promise()


  }
}
