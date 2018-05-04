'use strict';
var ServiceHelper = require("./proton81/service");

var iopipe = require('@iopipe/iopipe')({
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNzg3MmExNS1iMDJkLTRlODQtODhhZC0xZTMzYjU5MjNlNTEiLCJqdGkiOiJjOTNlMDRlMC04ODNkLTRkNDktOTdhMi00YzZmMzUzYTllNzQiLCJpYXQiOjE1MjQ4MjcxMDksImlzcyI6Imh0dHBzOi8vaW9waXBlLmNvbSIsImF1ZCI6Imh0dHBzOi8vaW9waXBlLmNvbSxodHRwczovL21ldHJpY3MtYXBpLmlvcGlwZS5jb20vZXZlbnQvLGh0dHBzOi8vZ3JhcGhxbC5pb3BpcGUuY29tIn0.oKr1yQns3xOgPNCyTNs3xxIj3LEeJdKhYDxCNcXoCdM'
    // login for a live token
});

exports.handler = iopipe((event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  ServiceHelper(event, context, callback)
});
