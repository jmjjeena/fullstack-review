var Repo = require('../database/index');

var repo = new Repo({
  id: Number,
  name: String,
  full_name: String,
  watchers: Number,
  forks: Number,
  stargazers_count: Number,
  html_url: String
});

repo.save(function(err) {
  if(err) {
    throw err
  } else {
    console.log(`The ${repo} has been saved`);
  }
});


let search = function() {
  Repo.find().sort('forks').limit(25).exec(function(err, data){
    if (err) {
      res.send(err)
    } else {
      res.status(200).send(JSON.stringify(data));
      console.log(`${data} has been found`);
    }
  });
}

let update = function() {
  Repo.find()
}


module.exports = search;