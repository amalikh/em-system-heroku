const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
const emp = require("../models/employee");
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');


const roles = require("../controllers/role.cotroller");


// GET /roles
router.get("/all", roles.findAll);

//POST roles
router.post('/add', roles.create);

module.exports = router;