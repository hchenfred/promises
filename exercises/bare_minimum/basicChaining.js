/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var github = require('./promisification');
var file = require('./promiseConstructor');

Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return file.pluckFirstLineFromFileAsync(readFilePath)
    .then(github.getGitHubProfileAsync)
    .then((body) => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(body));
    })
    .catch((error) => {
      console.log('Huan need to watch the Promise video again!');
    });
};



// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
