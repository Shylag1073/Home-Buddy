// Define global variables
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define class variable
class Item extends Model {}

// Initialize class variable
Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item_info: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'item'
    }
);

// Export class variable
module.exports = Item;
