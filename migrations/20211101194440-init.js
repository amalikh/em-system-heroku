'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      doj: {
        type: Sequelize.DATE
      },
      designation: {
        type: Sequelize.STRING
      },
      communication_add: {
        type: Sequelize.STRING
      },
      permanent_add: {
        type: Sequelize.STRING
      },
      current_photo: {
        type: Sequelize.BLOB
      },
      contact_no: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      }
    }, {
      timestamps: false
    });

    await queryInterface.createTable('attendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      in_time: {
        type: Sequelize.TIME
      },
      out_time: {
        type: Sequelize.TIME
      },
      date_of_attendance: {
        type: Sequelize.DATE
      },
      employees_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'employees',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  }
};