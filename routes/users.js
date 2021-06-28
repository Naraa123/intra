const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user");
const router = express.Router();

router
  .route("/")
  .get(getUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
