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
    status: {
        type: DataTypes.BOOLEAN
    },
    leave_type: {
        type: DataTypes.STRING
    },
    from_date:{
        type: DataTypes.DATEONLY
    },
    to_date:{
        type: DataTypes.DATEONLY
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