const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
const emp = require("../models/employee");
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
// const upload = require('../middleware/upload');
// const multer = require('multer');


const employees = require("../controllers/employee.controller.js");


// GET /employees
router.get("/all", employees.findAll);
router.get("/allActive", employees.findAllActive);

// router.post('/add', employees.uploadImg, employees.create);
router.post('/new', employees.create);
router.put('/update/:id', employees.update);



module.exports = router;