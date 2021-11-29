const sequelize = require("./../database/sequelize");
const Sequelize = require("sequelize");
const { defaults } = require("pg");


module.exports  = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        father_name: {
            type: DataTypes.STRING
        },
        dob: {
            type: DataTypes.DATEONLY
        },
        doj: {
            type: DataTypes.DATEONLY
        },
        designation: {
            type: DataTypes.STRING
        },
        communication_add: {
            type: DataTypes.STRING
        },
        permanent_add: {
            type: DataTypes.STRING
        },
        current_photo: {
            type: DataTypes.STRING(999999)
        },
        contact_no: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.INTEGER
        },
        is_active: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    });
    return Employee;
};


 