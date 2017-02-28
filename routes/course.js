var check = require('../middlewares/check');

module.exports = function(app) {
  var course = app.controllers.course;
  app.get('/courses', check, course.listCourses);
  app.post('/course', check, course.createCourse);
  app.get('/course/new', check, course.newCourse);
  app.get('/course/:id', check, course.showCourse);
}
