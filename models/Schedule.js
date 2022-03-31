// Define global variables
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define class variable
class Schedule extends Model {}

// Initialize class variable
Schedule.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      schedule_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'item',
          key: 'id'
        }
      },
      action: {
        type: DataTypes.STRING,
        allowNull: true
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "To-Do"
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'schedule'
    }
);

// Export class variable
module.exports = Schedule;
