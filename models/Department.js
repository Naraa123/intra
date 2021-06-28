const Sequelize = require("sequelize");
const db = require("../config/database");

const Dep = db.define("dep", {
  name: {
    type: Sequelize.STRING(75),
    allowNull: false,
  },
});

module.exports = Dep;
