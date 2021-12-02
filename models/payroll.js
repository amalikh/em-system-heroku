const sequelize = require("./../database/sequelize");
const Sequelize = require("sequelize");
const employees = require('./employee');

module.exports  = (sequelize, DataTypes) => {
    const Payroll = sequelize.define("payroll", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // basic_pay: {
    //     type: DataTypes.INTEGER
    // },
    allowance: {
        type: DataTypes.INTEGER
    },
    current_salary: {
        type: DataTypes.INTEGER
    },
    last_increment: {
        type: DataTypes.INTEGER
    },
    last_increment_date: {
        type: DataTypes.DATEONLY
    },
    last_salary_release_date: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: true,
    underscored:true,
    paranoid:true
});


return Payroll;
}