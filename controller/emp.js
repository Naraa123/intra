const Emp = require("../models/Employee");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.getEmps = asyncHandler(async (req, res, next) => {
  const emp = await Emp.findAll();
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.createEmp = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const emp = await Emp.create(req.body);
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.updateEmp = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const emp = await Emp.findOne({
    where: {
      id: 6,
    },
  });
  if (!emp) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  emp.update(req.body);
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.deleteEmp = asyncHandler(async (req, res, next) => {
  const emp = await Emp.findOne({
    where: {
      id: 6,
    },
  });
  if (!emp) {
    console.error("tiim ID baihgui baina");
    throw new MyError(" ID-baihgui baina.");
  }

  emp.destroy(req.body);
  res.status(200).json({
    success: true,
    data: emp,
  });
});
