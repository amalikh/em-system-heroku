const express = require("express");
const router = express.Router();

const { Op, DATE, TIME } = require("sequelize");
const payroll = require("../controllers/payroll.controller");

// Create a new Tutorial
router.post("/add", payroll.create);

// Retrieve all Tutorials
router.get("/all", payroll.findAlll);





module.exports = router;