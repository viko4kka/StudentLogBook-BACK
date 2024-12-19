const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/databaseConnection");

const User = sequelize.define("user", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	fullname: DataTypes.STRING,
	password: DataTypes.STRING,
	email: DataTypes.STRING,
});
