const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we are connected!');
});

let repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  full_name: String,
  watchers: Number,
  forks: Number,
  stargazers_count: Number,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, callback) => {
  // Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (let i = 0; i < repo.length; i++) {
    newRepo = new Repo ({
      id: repo[i].id,
      name: repo[i].name,
      fullname: repo[i].full_name,
      watchers: repo[i].watchers,
      forks: repo[i].forks,
      stargazers_count: repo[i].stargazers_count,
      html_url: repo[i].html_url
    });
    newRepo.save(callback);
    console.log('response', repo[i].name);
  }
}

let find = (callback) => {
  Repo.find({}).sort('-forks').limit(25).exec(callback)
}

module.exports.save = save;
module.exports.find = find;
