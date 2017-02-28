module.exports = function(app) {
  var security = app.controllers.security;
  app.get('/login', security.newLogin);
  app.post('/login', security.createLogin);
  app.get('/logout', security.logout);
  app.get('/signup', security.newSignup);
  app.post('/signup', security.createSignup);
  app.get('/', security.newLogin);
}
