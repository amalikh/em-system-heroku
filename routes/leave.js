const express = require("express");
const router = express.Router();

const { Op, DATE, TIME } = require("sequelize");
const leave = require("../controllers/leave.controller");

// Create a new Leave
router.post("/add", leave.create);

// Retrieve all Leaves with employee join
router.get("/all", leave.findAll);


// Retrieve all Leaves with employee join
router.get("/getall", leave.getAll);

 // Update a Leave with id
// router.put('/update/:id', leave.update);

// Delete a Leave with id
router.delete("/:id", leave.delete);



 // Update a Leave with id
 router.put('/status/:id', leave.updateLeaveStatus);


module.exports = router;