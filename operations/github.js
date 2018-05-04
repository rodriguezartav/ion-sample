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

module.exports = Model;


var AWS = require("aws-sdk");

exports.handler = async(event) => {



  var codebuild = new AWS.CodeBuild();

  var params = {
    projectName: "apibuilder",
    /* required */

    environmentVariablesOverride: [{
        name: 'GIT_REPO',
        /* required */
        value: 'STRING_VALUE',
        /* required */
        type: PLAINTEXT | PARAMETER_STORE
      }, {
        name: 'GIT_USER',
        /* required */
        value: 'STRING_VALUE',
        /* required */
        type: PLAINTEXT | PARAMETER_STORE
      }, {
        name: 'DB_PASSWORD',
        /* required */
        value: 'STRING_VALUE',
        /* required */
        type: PLAINTEXT | PARAMETER_STORE
      }, {
        name: 'NODE_ENV',
        /* required */
        value: 'STRING_VALUE',
        /* required */
        type: PLAINTEXT | PARAMETER_STORE
      },
      /* more items */
    ],


  };
  return codebuild.startBuild(params).promise()


};

//aws codebuild start-build --project apibuilder  --region us-east-1 --environment-variables-override name=GIT_REPO,value=ion-sample name=GIT_USER,value=rodriguezartav name=DB_PASSWORD,value=1qazxsw2 name=NODE_ENV,value=staging
