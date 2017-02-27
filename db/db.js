var loki = require('lokijs');

var db = new loki('college.json');
var courses = db.addCollection('courses');

module.exports = courses;
