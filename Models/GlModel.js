import db from "../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const Gl = db.define(
  "Gl",
  {
    id_gl: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama_gl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Gl;
