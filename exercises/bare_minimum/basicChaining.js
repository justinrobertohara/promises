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
var promiseConstructor = require('./promiseConstructor.js');
var https = require('https');
var request = require('request');
var writeFilePromise = Promise.promisify(fs.writeFile);
var requestPromise = Promise.promisify(request);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {    
      return requestPromise(`https://api.github.com/users/${username}`);  
    })
    .then(function(githubUserProfile) {
      //console.log('the body of githubUserProfile: ', githubUserProfile.body);
      return writeFilePromise(writeFilePath, githubUserProfile.body);
    })
    .catch(error => console.log(error));
};
// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
