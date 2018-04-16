const conn = require('./conn');
const Student = require('./Student');
const Campus = require('./Campus');

// define relationships
Student.belongsTo(Campus);
Campus.hasMany(Student);

const seedStudent = [
  { firstName: 'Dan', lastName: 'Reardon', email: 'dan@penn.edu', campusId: 1},
  { firstName: 'Greg', lastName: 'Moon', email: 'greg@nyu.edu', campusId: 1 },
  { firstName: 'Fendi', lastName: 'Liu', email: 'fendi@columbia.edu', campusId: 1 }
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

const seed = () => {
  const campusPromises = Promise.all(seedCampus.map(campus => Campus.create(campus)));
  const studentPromises = Promise.all(seedStudent.map(student => Student.create(student)));
  return Promise.all([ studentPromises, campusPromises ]);
};

module.exports = {
  models: {
    Campus,
    Student
  },
  sync,
  seed
};
