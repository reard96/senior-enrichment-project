const express = require('express');
const app = express();
const path = require('path');

const db = require('./db');

app.use(require('body-parser').json());

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Routing
app.use('/students', require('./routes/students'));
app.use('/campuses', require('./routes/campuses'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
