const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('username:', username);
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    }
  };

  let cb = (error, res, body) => {
    if (!error && res.statusCode === 200) {
      let data = JSON.parse(body);
      console.log('data: ', data);
      callback(data);
    }
  }
  request(options, cb);

  // request.get(options, function(err, result) {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log('result:', result);
  //     let data = JSON.parse(result.body);
  //     callback(data)
  //   }
  // });
}

module.exports.getReposByUsername = getReposByUsername;