const Pos = require("../models/Position");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getPositions = asyncHandler(async (req, res, next) => {
  const pos = await Pos.findAll();
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.createPos = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const pos = await Pos.create(req.body);
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.updatePos = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const pos = await Pos.findOne({
    where: {
      id: 6,
    },
  });
  if (!pos) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  pos.update(req.body);
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.deletePos = asyncHandler(async (req, res, next) => {
  const pos = await Pos.findOne({
    where: {
      id: 6,
    },
  });
  if (!pos) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  pos.destroy(req.body);
  res.status(200).json({
    success: true,
    data: pos,
  });
});
