const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', function (err) {
  if (err) throw err;
  console.log('Successfully connected');
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
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.save();
}

// module.exports = Repo;
module.exports.save = save;