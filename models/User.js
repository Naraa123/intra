const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  password: {
    type: Sequelize.STRING(75),
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING(75),
  },
});

module.exports = User;
