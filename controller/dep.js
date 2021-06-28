const Dep = require("../models/Department");
const asyncHandler = require("express-async-handler");

exports.getDeps = asyncHandler(async (req, res, next) => {
  const dep = await Dep.findAll();
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.createDep = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const dep = await Dep.create(req.body);
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.updateDep = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const dep = await Dep.findOne({
    where: {
      id: 6,
    },
  });
  if (!dep) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  dep.update(req.body);
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.deleteDep = asyncHandler(async (req, res, next) => {
  const dep = await Dep.findOne({
    where: {
      id: 6,
    },
  });
  if (!dep) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  dep.destroy(req.body);
  res.status(200).json({
    success: true,
    data: dep,
  });
});
