const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// define columns
//   `Category`
Category.init(
  {
    // * `id`
    id: {
      //   * Integer.
      type: DataTypes.INTEGER,
      //   * Doesn't allow null values.
      allowNull: false,
      //   * Set as primary key.
      primaryKey: true,
      //   * Uses auto increment.
      autoIncrement: true,
    },
    // * `category_name`    
    category_name: {
      //   * String.      
      type: DataTypes.String, 
      //   * Doesn't allow null values.
      allowNull: false,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
