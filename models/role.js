const sequelize = require("./../database/sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("role", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type:Sequelize.STRING
        }
    }, {
        timestamps: false
    });
    return Role;
}
