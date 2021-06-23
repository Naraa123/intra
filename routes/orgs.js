const express = require("express");
const {
  getOrgs,
  createOrg,
  updateOrg,
  //deleteOrg,
  getOrg,
  selectOrg,
} = require("../controller/org");
const router = express.Router();

router.route("/").get(getOrgs).post(createOrg);

//router.route("/org").get(selectOrg).delete(deleteOrg).put(updateOrg);
router.route("/:id").put(updateOrg);
//router.route("/:id").get(getOrg);
router.route("/select").get(selectOrg);

module.exports = router;
