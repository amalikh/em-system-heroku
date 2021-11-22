const db = require("../models");
const Role = db.role;
const Op = db.Sequelize.Op;



// Retrieve all Attendances from the database.
exports.findAll = (req, res) => {
    Employee.findAll()
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  };


// Create and Save a new Role
exports.create = (req, res, next) => {
        Role.create({
                name: req.body.name,
            }).then((role) => {
                res.json(role);
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
};


