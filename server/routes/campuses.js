const app = require('express').Router();
const db = require('../db');
const { Campus } = db.models;

app.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

app.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next);
});

app.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => {
      Object.assign(campus, req.body);
      return campus.save();
    })
    .then(campus => res.send(campus))
    .catch(next);
});

app.delete('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => {
      return campus.destroy();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = app;
