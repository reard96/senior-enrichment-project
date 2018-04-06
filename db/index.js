const Promise = require('bluebird');

const conn = require('./conn');
const Student = require('./Student');
const Campus = require('./Campus');

// define relationships
Student.belongsTo(Campus);
Campus.hasMany(Student);

// seed initial data
const seedStudent = [
  { firstName: 'Dan', lastName: 'Reardon', email: 'dan@penn.edu', campusId: 3 },
  { firstName: 'Greg', lastName: 'Moon', email: 'greg@nyu.edu', campusId: 1 },
  { firstName: 'Fendi', lastName: 'Liu', email: 'fendi@columbia.edu', campusId: 2 }
];

const seedCampus = [
  { name: 'NYU' },
  { name: 'Columbia' },
  { name: 'Penn' },
  { name: 'Princeton' }
];

const sync = () => {
  return conn.sync({ force: true });
};

// using Bluebird's 'each' to prevent async issues
// i.e. so that campusId of seeded students matches the correct campus
const seed = () => {
  Promise.each(seedCampus.map(campus => Campus.create(campus)));
  Promise.each(seedStudent.map(student => Student.create(student)));
};

module.exports = {
  models: {
    Campus,
    Student
  },
  sync,
  seed
};
