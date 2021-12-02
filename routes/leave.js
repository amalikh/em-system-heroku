const express = require("express");
const router = express.Router();

const { Op, DATE, TIME } = require("sequelize");
const leave = require("../controllers/leave.controller");

// Create a new Leave
router.post("/add", leave.create);

// Retrieve all Leaves
router.get("/all", leave.findAll);

//update leave
router.put('/update/:id', leave.update);

module.exports = router;