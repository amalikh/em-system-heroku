const sequelize = require("./../database/sequelize");
const Sequelize = require("sequelize");

module.exports  = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});
return User;
}
