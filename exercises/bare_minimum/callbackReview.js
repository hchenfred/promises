/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }
    var urlArray = data.split('\n');
    callback(err, urlArray[0]);
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  https.get(url, (res) => {
    callback(undefined, res.statusCode);
  }).on('error', (err) => {
    err.message = 'Invalid URI';
    callback(err);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
