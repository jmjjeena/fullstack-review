const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('../database/index');
let repos = require('../helpers/github.js')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('body: ', req.body);
  const username = req.body.username;

  console.log(username);

  repos.getReposByUsername(username, (results) => {
    // console.log('repo:', repo);
    db.save(results, (err, result) => {
      res.status(201);
    })
  })
});


app.get('/repos',(req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.find((err, result) => {
    if(err) {
      console.log('err: ', err);
      res.statusCode(401)
    } else {
      res.send(result);
    }
  });
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

