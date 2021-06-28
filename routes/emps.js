const express = require("express");
const {
  getEmps,
  createEmp,
  updateEmp,
  deleteEmp,
} = require("../controller/emp");
const router = express.Router();

router.route("/").get(getEmps).post(createEmp).put(updateEmp).delete(deleteEmp);

module.exports = router;
