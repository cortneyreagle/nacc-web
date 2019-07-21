var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Northern Arizona Chess Center' });
});

// About Us
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
})

// Calendar
router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'Calendar' });
})

// Contact
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
})

module.exports = router;
