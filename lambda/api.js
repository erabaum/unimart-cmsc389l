'use strict';

var elasticsearch = require('elasticsearch')
var es = elasticsearch.Client({
  hosts: [ 'search-cmsc389l-erabaum-es-vegfo7zvifsw47egrzvvjh5evu.us-east-1.es.amazonaws.com/' ],
  connectionClass: require('http-aws-es')
});

exports.getItem = (event, context, callback) => {

  var params = {
    index: 'items',
    type: 'item',
    id: event.pathParameters.id
  };

  es.get(params, (err, data) => {
    if (err) {
      var res = {
        "isBase64Encoded": false,
        "statusCode": 403,
        "headers": {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(err)
      }
      callback(err, null);
    } else {
      var res = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(data)
      }
      callback(null, res);
    }
  });
};

exports.getAllItems = (event, context, callback) => {

  var params = {
    index: 'items',
    type: 'item'
  };

  if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
    if (event.queryStringParameters.search !== null && event.queryStringParameters.search !== undefined) {
      params.body = {
        query: {
          multi_match: {
            query: event.queryStringParameters.search,
            fields: [
                "title^3",
                "seller_name",
                "description"
              ],
              fuzziness: "AUTO"
          }
        }
      }
    }
  }

  es.search(params, (err, data) => {
    if (err) {
      var res = {
        "isBase64Encoded": false,
        "statusCode": 403,
        "headers": {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(err)
      }
      callback(err, null);
    } else {
      var res = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(data.hits)
      }
      callback(null, res);
    }
  });
};

exports.postItem = (event, context, callback) => {
  var uuid = require('uuid');

  var params = {
    id: uuid.v1(),
    index: 'items',
    type: 'item',
    body: event.body
  };

  es.create(params, (err, data) => {
    if (err) {
      var res = {
        "isBase64Encoded": false,
        "statusCode": 403,
        "headers": {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(err)
      }
      callback(err, null);
    } else {
      var res = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true
        },
        "body": JSON.stringify(data)
      }
      callback(null, res);
    }
  });
};
