const conn = require('./conn');
const { Sequelize } = conn;

const Student = conn.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    // We have grade inflation :)
    defaultValue: function() {
      return Math.random() * 2 + 2;
    },
    validate: {
      notEmpty: true
    }
  },
  /* I downloaded a bunch of images using https://github.com/fangpenlin/avataaars
     for a quick and dirty solution. To-do: implement the React module; write
     a randomizing function. */
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: function() {
      const randomNumber = Math.floor(Math.random() * 24) + 1;
      return `/images/avataaars${randomNumber}.png`;
    }
  }
}, {
  getterMethods: {
    name: function(){
      return `${this.firstName} ${this.lastName}`;
    }
  }
});

module.exports = Student;
