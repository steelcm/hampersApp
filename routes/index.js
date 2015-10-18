var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/home', { title: 'Celia Brooks - Borough Market Hampers' });
});

router.get('/why', function(req, res, next) {
  res.render('views/why', { title: 'Celia Brooks - Borough Market Hampers' });
});

router.get('/about', function(req, res, next) {
  res.render('views/about', { title: 'Celia Brooks - Borough Market Hampers' });
});

router.get('/purchase', function(req, res, next) {
  res.render('views/purchase', { title: 'Celia Brooks - Borough Market Hampers' });
});

router.get('/partials/:name', function (req, res) { 
   var name = req.params.name;
   res.render('partials/' + name + '.jade');
});

module.exports = router;
