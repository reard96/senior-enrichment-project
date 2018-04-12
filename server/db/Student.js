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
    defaultValue: 0.00,
    validate: {
      notEmpty: true
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
