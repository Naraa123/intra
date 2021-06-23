const Sequelize = require("sequelize");
const db = require("../config/database");

const Org = db.define("org", {
  name: {
    type: Sequelize.STRING(75),
  },
  ceo_name: {
    type: Sequelize.STRING(75),
  },
});

module.exports = Org;
