const db = require("../models");
const Employee = db.employee;


const Op = db.Sequelize.Op;


// Retrieve all employees from the database.
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


// Create and Save a new Attendance
exports.create = (req, res, next) => {
    console.log("This is a file "+ req.file.path);
    // user.findAll().then((user) => {
    //     if (user.length >= 1) {
    //         return res.status(409).json({
    //             message: 'Mail exists'
    //         });
    //     } else {
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //     if (err) {
    //         return res.status(500).json({
    //             error: err
    //         });
    //     } else {
        Employee.create({
                name: req.body.name,
                father_name: req.body.father_name,
                dob: req.body.dob,
                doj: req.body.doj,
                designation: req.body.designation,
                communication_add: req.body.communication_add,
                permanent_add: req.body.permanent_add,
                current_photo: req.file.path,
                contact_no: req.body.contact_no,
                email: req.body.email,
                // basic_pay: req.body.basic_pay
            }).then((employee) => {
                res.json(employee);
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        // }
    // });
    // }
// });
};

exports.create = (req, res, next) => {
        Employee.create({
                name: req.body.name,
                father_name: req.body.father_name,
                dob: req.body.dob,
                doj: req.body.doj,
                designation: req.body.designation,
                communication_add: req.body.communication_add,
                permanent_add: req.body.permanent_add,
                current_photo: req.body.current_photo,
                contact_no: req.body.contact_no,
                email: req.body.email,
                // basic_pay: req.body.basic_pay
            }).then((employee) => {
                res.json(employee);
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
};


// Update a employee by the id in the request
exports.update = (req, res) => {
    const id = req.body.id;
  
    Employee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "employee was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Employee with id=" + id
        });
      });
  };

  // Retrieve all employees where is_active == true.
exports.findAllActive = (req, res) => {
  const is_active = 'true';
  Employee.findAll({where: { is_active: is_active }})
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
