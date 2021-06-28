const express = require("express");
const {
  getDeps,
  createDep,
  updateDep,
  deleteDep,
} = require("../controller/dep");
const router = express.Router();

router.route("/").get(getDeps).post(createDep).put(updateDep).delete(deleteDep);

module.exports = router;
