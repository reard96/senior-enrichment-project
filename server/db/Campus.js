const conn = require('./conn');
const { Sequelize } = conn;


const urls = require('./campusUrls');

const Campus = conn.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: function() {
      return urls[Math.floor(Math.random() * urls.length)];
      },
    validate: {
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'College-y college things!',
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Campus;
