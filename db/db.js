var loki = require('lokijs');
var database = {};
var db = new loki('college.json');
var courses = db.addCollection('courses');
var users = db.addCollection('users');
database.users = users;
database.courses = courses;
module.exports = database;
