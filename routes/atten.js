const express = require("express");
const router = express.Router();

const { Op, DATE, TIME } = require("sequelize");
const attendances = require("../controllers/attendance.controller.js");

// Create a new Tutorial
router.post("/daily", attendances.create);

// Retrieve all Tutorials
router.get("/all", attendances.findAll);
router.get("/allWithCurrentDate", attendances.findAllWithCurrentDate);
router.post("/add", attendances.createAttendance);

module.exports = router;