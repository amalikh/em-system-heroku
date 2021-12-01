const sequelize = require("./../database/sequelize");
const Sequelize = require("sequelize");
const employees = require('./employee');

module.exports  = (sequelize, DataTypes) => {
    const Attendance = sequelize.define("attendance", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING
    },
    in_time: {
        type: DataTypes.DATE
    },
    out_time: {
        type: DataTypes.DATE
    },
    date_of_attendance: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: true,
    underscored:true,
    paranoid:true
});


return Attendance;
}