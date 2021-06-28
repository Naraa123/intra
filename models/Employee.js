const Sequelize = require("sequelize");
const db = require("../config/database");

const Emp = db.define("emp", {
  last_name: {
    type: Sequelize.STRING(75),
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING(75),
    allowNull: false,
  },
  department: {
    type: Sequelize.INTEGER,
  },
  position: {
    type: Sequelize.INTEGER,
  },
  registr: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE,
  },
  gender: {
    type: Sequelize.STRING(6),
  },
  phone: {
    type: Sequelize.STRING(20),
  },
  email: {
    type: Sequelize.STRING(40),
  },
});

module.exports = Emp;
