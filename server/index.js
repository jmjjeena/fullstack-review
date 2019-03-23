const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let save = require('../database/index').save;
const getReposByUsername = require('../helpers/github.js').getReposByUsername;


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send('POST request to the GithubAPI');
});


app.get('/repos',(req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
 res.sendStatus(201);
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

