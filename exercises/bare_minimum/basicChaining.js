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
var pluckFirstLineFromFileAsync = require('./promiseConstructor.js');
var https = require('https');
var request = require('request');
var wf = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluckFirstLineFromFileAsync.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {
      request(`https://api.github.com/users/${username}`, function(error, response, body) {
      });
    //var url = 'https://api.github.com/users/' + userName
    })

    //ENDING HERE
    //WE ARE GETTING TO SECOND THEN
    //githubUserProfile is currently undefined
    .then(function(githubUserProfile) {
      console.log('we made it to second then');
      console.log(githubUserProfile);
      return wf(writeFilePath, githubUserProfile);
    })
    .catch(error => console.log(error));
};
// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
