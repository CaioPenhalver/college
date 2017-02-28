var courseDB = require('../db/db.js').courses;

module.exports = function(app) {
  var categories = [
        { id: 0, name: 'Desenvolvimento' },
        { id: 1, name: 'Design' },
        { id: 2, name: 'Arquiitetura' },
        { id: 3, name: 'Web Design' },
        { id: 4, name: 'Banco de dados' }
      ];
  
  return {
    listCourses: function(req, res){
      var params = { courses: courseDB.find() };
      res.render('course/index', params);
    },
    createCourse: function(req, res){
      courseDB.insert(req.body);
      console.log(courseDB.find());
      var params = { courses: courseDB.find() };
      res.render('course/index', params);
    },
    newCourse: function(req, res){
      var params = { categories: categories };
      res.render('course/new', params);
    },
    showCourse: function(req, res) {
      var course = courseDB.get(req.params.id)
      categories.forEach(function(c){
        if(parseInt(course.category_id) === c.id){
          course.category = c.name;
          return;
        }
      });
      var params = { course: course };
      res.render('course/show', params);
    }
  }
}
