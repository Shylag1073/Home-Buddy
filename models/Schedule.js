const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Schedule extends Model { }

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_due: {
      //type: ???
      allowNull: false,
      //validate: {isDate???}
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "To Do",
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "item",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "schedule",
  }
);

module.exports = Schedule;