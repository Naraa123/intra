const Sequelize = require("sequelize");
const db = require("../config/database");

const Pos = db.define("position", {
  name: {
    type: Sequelize.STRING(75),
  },
});

module.exports = Pos;
