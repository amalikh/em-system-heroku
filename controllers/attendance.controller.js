const db = require("../models");
const Employee = db.employee;
const Attendance = db.attendance;

const Op = db.Sequelize.Op;

// Create and Save a new Attendance
exports.create = (req, res) => {
  // // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
  const attendance = {
    status: req.body.status,
    in_time: req.body.in_time,
    out_time: req.body.out_time,
    date_of_attendance: req.body.date_of_attendance,
    employees_id: req.body.employees_id
  };
  Attendance.create(attendance)
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


// Retrieve all Attendances from the database.
exports.findAll = (req, res) => {
  Attendance.findAll()
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

//retrieve attendance of an employee for a month
exports.findByEmployee = (req, res) => {
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

  Attendance.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Attendance was updated successfully."
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

//todays attendance donecheck
// exports.findAllWithCurrentDate = (req, res) => {
//   const dateNow = new Date();
//   let dateToday = dateNow.toISOString().slice(0,10);
//   console.log("Current date is " + dateToday);
//   Attendance.findAll({ 
//     where: {
//       [Op.or]: [{date_of_attendance: dateToday}, {date_of_attendance: null}]
//     },
//     attributes:{exclude: ['createdAt', 'updatedAt', 'deletedAt']},
//     include:
//     {
//       model: Employee,
//       as: 'employee',
//       attributes: ['name','id','current_photo'],
//       right:true,
//   },
//    })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving attendance."
//       });
//     });
// };


exports.findAllWithCurrentDate = (req, res) => {
  const dateNow = new Date();
  let dateToday = dateNow.toISOString().slice(0, 10);
  console.log("Current date is " + dateToday);
  Attendance.findAll({
    where: {
      date_of_attendance: dateToday
    },
    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
  })
    .then((data) => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving attendance."
      });
    });
};

// exports.createAttendance = (req, res) => {
//   const id = req.body.id;
//    Attendance.findAll().then((user) => {
//         if (user.length >= 1) {
//             return res.status(409).json({
//                 message: 'Mail exists'
//             });


exports.createAttendance = (req, res) => {

  let date_ob = new Date();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  // let TimeNow = (hours + ":" + minutes);
  let TimeNow = Date.now();

  const attendanceObject = {
    status: req.body.status,
    in_time: req.body.in_time,
    out_time: null,
    date_of_attendance: req.body.date_of_attendance,
    employees_id: req.body.employees_id
  };
const s = 'Present';
  
  Attendance.findAll({
    where: {
      employees_id: req.body.employees_id,
      date_of_attendance: req.body.date_of_attendance
    }
  })
    .then(attendance => {
      if (attendance.length < 1) {

        Attendance.create(attendanceObject)
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the attendance."
            });
          });
      } else {

        const id = req.body.id;
  
        Attendance.update(
          { out_time: TimeNow },
          {
            where: { employees_id: req.body.employees_id,
              date_of_attendance: req.body.date_of_attendance,
              status:s
           }
          })
          .then(data => {
            res.send({
              message: "attendance updated successfully.",
              data
            });

          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Attendance with id=" + id
            });
          });

      }
    });

};