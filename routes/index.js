var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var loginData;
  if(req.session.user){
    loginData = {
      isLogin: true,
      user: {
        avator: req.session.user.avator,
        username: req.session.user.username
      }
    }
  }else{
    loginData = {
      isLogin: false
    }
  }

  res.render('index', loginData);
});

module.exports = router;
