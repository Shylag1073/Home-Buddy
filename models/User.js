// Define global variables
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define class variable
class User extends Model {
    checkPassword(loginPassword) {
      return bcrypt.compareSync(loginPassword, this.password);
    }
}

// Initialize class variable
User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [12]
        }
      },
      space_name: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      hooks: {
        // beforeCreate hook
        async beforeCreate(data) {
          data.password = await bcrypt.hash(data.password, 10);
          return data;
        },
        // beforeUpdate hook
        async beforeUpdate(data) {
          data.password = await bcrypt.hash(data.password, 10);
          return data;
        }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );
  
  // Export class variable
  module.exports = User;
  