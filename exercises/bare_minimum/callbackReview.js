/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
const readLine = require('readline');



// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO 

  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      callback(err);
    } else if (data) {
      var rl = readLine.createInterface({input: fs.createReadStream(filePath)});
      var counter = 0;
      let firstLine = '';
      rl.on('line', function(lineVal) {
        if (counter === 0 ) {
          firstLine = lineVal;
          callback(null, firstLine);
        } 
        counter++;
      });   
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
