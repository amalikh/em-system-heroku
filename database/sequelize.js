const Sequelize = require("sequelize");
const dbconfig = require("./../database/dbconfig");
const dbConfig = require("./../database/dbconfig");
// var pg = require('pg');
// pg.defaults.ssl = true;
module.exports = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
    // dialectOptions: {
    //     ssl: {
    //         require: true, // This will help. But you will see new error
    //         rejectUnauthorized: false // This line will fix new error
    //       }
    //   }
}).authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });