const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    category_name: { type: DataTypes.STRING, allowNull: false },
    category_description: { type: DataTypes.STRING, allowNull: true },
    category_status: {       //anumirision if we have more options for status instead of sring
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  };
  return sequelize.define("category", attributes);
}
