const express = require("express");
const router = express.Router();

const { Op, DATE, TIME } = require("sequelize");
const attendances = require("../controllers/attendance.controller.js");

// Create a new Tutorial
router.post("/daily", attendances.create);

// Retrieve all Tutorials
router.get("/all", attendances.findAll);





module.exports = router;