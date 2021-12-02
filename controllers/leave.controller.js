const db = require("../models");
const Leave = db.leave;
const Employee = db.employee;
const Op = db.Sequelize.Op;

// Create and Save a new Leave
exports.create = (req, res) =>{
// // Validate request
// if (!req.body.title) {
//   res.status(400).send({
//     message: "Content can not be empty!"
//   });
//   return;
// }
const leave = {
  category: req.body.category,
  designation: req.body.designation,
  leave_type:req.body.leave_type,
  from_date: req.body.from_date,
  to_date: req.body.to_date,
  description: req.body.description,
  employees_id: req.body.employees_id

};
Leave.create(leave)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the attendance."
      });
    });
};


// Retrieve all leaves from the database.
exports.findAll = (req, res) => {
  Leave.findAll({
    include:
    {
        model: Employee,
        as: 'employee',
        attributes: ['name']
    }
})
  .then((data) => {
      res.json(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving leaves."
    });
  });
};

// Update a leave by the id in the request
exports.update = (req, res) => {
  const id = req.body.id;

  Leave.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "leave updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Leave with id=${id}. Maybe Leave was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Leave with id=" + id
      });
    });
};




//retrieve attendance of an employee for a month
exports.findByEmployee = (req, res) =>{
    const id = req.params.id;
    
};

// Find a single Attendance with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Tutorial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };
  

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };