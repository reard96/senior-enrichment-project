const conn = require('./conn');
const Student = require('./Student');
const Campus = require('./Campus');
const Promise = require('bluebird');
const chance = require('chance')(123);

// define relationships
Student.belongsTo(Campus);
Campus.hasMany(Student);

const numStudents = 500;
const numCampuses = 20;

function doTimes (n, fn) {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

const randStudent = () => {
  return Student.build({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email()
  });
};

const randCampus = () => {
  return Campus.build({
    name: chance.word(),
    description: chance.paragraph()
  });
};

const generateStudents = () => {
  const students = doTimes(numStudents, randStudent);
  students.push(Student.build({
    firstName: 'Dan',
    lastName: 'Reardon',
    email: 'dan@dan.com'
  }));
  return students;
};

const generateCampuses = () => {
  const campuses = doTimes(numCampuses, randCampus);
  campuses.push(Campus.build({
    name: 'NYU'
  }));
  campuses.push(Campus.build({
    name: 'Columbia'
  }));
  campuses.push(Campus.build({
    name: 'Fordham'
  }));
  campuses.push(Campus.build({
    name: 'Parsons'
  }));
  return campuses;
};

const createStudents = () => {
  return Promise.map(generateStudents(), student => student.save());
};

const createCampuses = () => {
  return Promise.map(generateCampuses(), campus => campus.save());
};

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  return createStudents()
  .then(() => createCampuses());
};

module.exports = {
  models: {
    Campus,
    Student
  },
  sync,
  seed
};
