const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.findAll();
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const user = await User.findOne({
    where: {
      id: 6,
    },
  });
  if (!user) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  user.update(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: 6,
    },
  });
  if (!user) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  user.destroy(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});
