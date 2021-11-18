const dbConfig = require("../database/dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,
  operatorsAliases:0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.employee = require("./employee")(sequelize, Sequelize);
db.attendance = require("./attendance")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);
db.role = require("./role")(sequelize, Sequelize);
db.leave = require("./leave")(sequelize, Sequelize);
db.payroll = require("./payroll")(sequelize, Sequelize);


//Relations
db.attendance.belongsTo(db.employee, {
  foreignKey: "employees_id",
  as: "employee",
});

db.user.belongsTo(db.role, {
  foreignKey: "role_id",
  as: "role",
});

db.leave.belongsTo(db.employee, {
  foreignKey: "employees_id",
  as: "employee",
});

db.payroll.belongsTo(db.employee, {
  foreignKey: "employees_id",
  as: "employee",
});

// db.employee.hasMany(db.leave, {
//   foreignKey: "employees_id",
//   as: "employee",
// });
module.exports = db;