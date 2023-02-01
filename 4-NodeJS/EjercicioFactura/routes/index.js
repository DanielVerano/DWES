var express = require('express');
var router = express.Router();
const { productos } = require('../public/bbdd');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { productos: productos });
});

module.exports = router;
