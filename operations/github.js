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
    var user = body.repository.owner.login;
    var repo = body.repository.name;

    var branchName = body.ref ? body.ref.split("refs/heads/")[1] : "master";
    var functionName = `${user}_${repo.replace("lambda-","")}_${branchName}`

    var params = {
      projectName: "apibuilder",
      environmentVariablesOverride: [{
          name: 'FUNCTION_NAME',
          value: functionName,
          type: "PLAINTEXT"
        }, {
          name: 'RESPONSE_TYPE',
          value: "api",
          type: "PLAINTEXT"
        }, {
          name: 'REQUIRE_KNEX',
          value: "true",
          type: "PLAINTEXT"
        }, {
          name: 'GIT_REPO',
          value: repo,
          type: "PLAINTEXT"
        }, {
          name: 'GIT_USER',
          value: user,
          type: "PLAINTEXT"
        }, {
          name: 'DB_PASSWORD',
          value: '1qazxsw2',
          type: "PLAINTEXT"
        }, {
          name: 'NODE_ENV',
          value: 'staging',
          type: "PLAINTEXT"
        },
        /* more items */
      ],


    };
    return codebuild.startBuild(params).promise()


  }
}


module.exports = Model;
