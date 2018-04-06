const express = require('express');
const app = express();

const db = require('./db');
const { Student, Campus } = db.models;

const port = process.env.PORT || 3000;

app.get('/api/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

app.get('/api/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
