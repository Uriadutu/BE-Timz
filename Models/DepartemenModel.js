import db from "../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const Departemen = db.define(
  "departemen",
  {
    id_departemen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama_departemen :{
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

export default Departemen;
