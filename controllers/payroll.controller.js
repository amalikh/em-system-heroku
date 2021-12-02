const db = require("../models");
const Employee = db.employee;
const Payroll = db.payroll;

const Op = db.Sequelize.Op;

// Create and Save a new Payroll
exports.create = (req, res) => {

    const payroll = {
        // basic_pay: req.body.basic_pay,
        allowance: req.body.allowance,
        current_salary: req.body.current_salary,
        last_increment: req.body.last_increment,
        last_increment_date: req.body.last_increment_date,
        last_salary_release_date: req.body.last_salary_release_date,
        employees_id: req.body.employees_id
    };

    Payroll.create(payroll)
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

//Rerieve all payroll form the database right joining with employee emp name
exports.findAlll = (req, res) => {
    Payroll.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include:
        {
            model: Employee,
            where: {
                [Op.or]: [{is_active: true}]
                },
            as: 'employee',
            attributes: ['id','name','basic_pay','is_active'],
            right:true,
            required:false
        }

    })
        .then((data) => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving payroll with employee name."
            });
        });
};

// Retrieve all payroll from the database.
exports.findAll = (req, res) => {
    Payroll.findAll()
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

    Payroll.findByPk(id)
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

    Payroll.update(req.body, {
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

    Payroll.destroy({
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
    Payroll.destroy({
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
    Payroll.findAll({ where: { published: true } })
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