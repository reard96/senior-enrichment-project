const conn = require('./conn');
const { Sequelize } = conn;

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
    defaultValue: 'http://www.collegerank.net/wp-content/uploads/2015/08/morehouse-college-quad.jpg',
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
