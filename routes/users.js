var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  
});

module.exports = router;
