const Org = require("../models/Org");
const asyncHandler = require("express-async-handler");

exports.getOrgs = asyncHandler(async (req, res, next) => {
  const org = await Org.findAll();
  res.status(200).json({
    success: true,
    data: org,
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

exports.updateOrg = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const org = await Org.findOne({
    where: {
      id: 6,
    },
  });
  if (!org) {
    console.error("tiim ID baihgui baina");
    throw new Error(" ID-baihgui baina.");
  }

  org.update(req.body);
  res.status(200).json({
    success: true,
    data: org,
  });
});

exports.deleteOrg = asyncHandler(async (req, res, next) => {
  const org = await Org.findOne({
    where: {
      id: 6,
    },
  });
  if (!org) {
    console.error("tiim ID baihgui baina");
  }
  org.destroy();

  res.status(200).json({
    success: true,
    data: org,
  });
});
