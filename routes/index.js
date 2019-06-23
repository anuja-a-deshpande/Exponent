var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var app = express()

const { UpperCase, Encrypt } = require("./transforms");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// POST method route
router.post('/', function (req, res) {

  var user_name = req.body.user;
  var password = req.body.password;
  var trsn = req.headers.transformation;
  
  console.log(trsn);
  console.log("User name = " + user_name + ", password is " + password);

  var result = user_name;
  if (trsn === "ToUpper") {
    result = UpperCase(user_name);
  }
  else if (trsn === "encrypt") {
    result = Encrypt(user_name);
  }

  res.end(JSON.stringify(result, null, 2))

})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express node' });
});

module.exports = router;
