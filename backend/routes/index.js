var express = require('express');
var PostController = require('../controller/PostController');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/get-post-data', PostController.getPostData);

module.exports = router;
