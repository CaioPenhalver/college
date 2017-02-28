var usersDB = require('../db/db.js').users;

module.exports = function(app){
  return {
    createLogin:function(req, res){
      var user = usersDB.findOne({
        email: req.body.email
      });
      if(typeof user !== 'undefined' && user !== null 
          && user.password === req.body.password){
        req.session.user = user.$loki;
        res.redirect('/courses');
      } else {
        res.render('security/login');
      }
    },
    newLogin: function(req, res){
      res.render('security/login');
    },
    logout:function(req, res){
      req.session.destroy();
      res.redirect('/login');
    },
    createSignup:function(req, res){
      if(req.body.password === req.body.password_confirmation){
        var user = usersDB.insert({
          password: req.body.password,
          email: req.body.email
        }); 
        req.session.user = user.$loki
        res.redirect('/courses');
      } else {
        var msg = { error: 'As senhas são diferentes!!!' };
        res.render('security/signup', msg);
      }
    },
    newSignup: function(req, res){
      res.render('security/signup');
    }
  }
}
