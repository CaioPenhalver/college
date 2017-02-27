module.exports = function(app) {
  var course = app.controllers.course;
  app.get('/courses', course.listCourses);
  app.post('/course', course.createCourse);
  app.get('/course/new', course.newCourse);
  app.get('/course/:id', course.showCourse);
}
