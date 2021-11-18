const sequelize = require("../database/sequelize");
const Sequelize = require("sequelize");
const employees = require('./employee');


module.exports  = (sequelize, DataTypes) => {
    const Leave = sequelize.define("leave", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
        type: DataTypes.STRING
    },
    designation: {
        type: DataTypes.STRING
    },
    leave_type: {
        type: DataTypes.STRING
    },
    from_date:{
        type: DataTypes.DATE
    },
    to_date:{
        type: DataTypes.DATE
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    underscored:true,
    paranoid:true
});


return Leave;
}