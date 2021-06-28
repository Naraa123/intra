const express = require("express");
const {
  getPositions,
  createPos,
  updatePos,
  deletePos,
} = require("../controller/pos");
const router = express.Router();

router
  .route("/")
  .get(getPositions)
  .post(createPos)
  .put(updatePos)
  .delete(deletePos);

module.exports = router;
