const express = require("express");
const {
  getOrgs,
  createOrg,
  updateOrg,
  deleteOrg,
} = require("../controller/org");
const router = express.Router();

router.route("/").get(getOrgs).post(createOrg).put(updateOrg).delete(deleteOrg);

module.exports = router;
