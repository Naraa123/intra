const Org = require("../models/Org");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");
const sequelize = require("sequelize");

exports.getOrgs = asyncHandler(async (req, res, next) => {
  const orgs = await Org.findAll();
  res.status(200).json({
    success: true,
    data: orgs,
  });
});

exports.createOrg = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const org = await Org.create(req.body);
  res.status(200).json({
    success: true,
    data: org,
  });
});

// exports.getOrg = asyncHandler(async (req, res, next) => {
//   const org = await Org.find({ _id: req.params.id });
//   res.status(200).json({
//     success: true,
//     data: org,
//   });
// });

exports.selectOrg = asyncHandler(async (req, res, next) => {
  const orgs = await db.query("SELECT * FROM orgs LIMIT 1");
  res.status(200).json({
    success: true,
    count: orgs.length,
    data: orgs,
  });
});

exports.updateOrg = asyncHandler(async (req, res, next) => {
  const org = await Org.update(req.body, req.params.id);
  org.save();
  res.status(200).json({
    success: true,
    data: org,
  });
});

// exports.selectOrg = asyncHandler(async (req, res, next) => {
//   const orgs = await db.query("SELECT * FROM orgs LIMIT 1");
//   res.status(200).json({
//     success: true,
//     count: orgs.length,
//     data: orgs,
//   });
// });

// exports.deleteOrg = asyncHandler(async (req, res, next) => {
//   const orgs = await db.query("DELETE FROM orgs WHERE id = 2");
//   res.status(200).json({
//     success: true,
//     count: orgs.length,
//     data: orgs,
//   });
// });
