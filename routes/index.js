var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Tracker App' });
});


// router.get('/about', (res, req, next) => {
//   res.render('', {title: 'About Us'})
// });



module.exports = router;
