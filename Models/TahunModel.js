import db from "../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const Tahun = db.define(
  "Tahun",
  {
    bulan :{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tahun :{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jenis_vendor :{
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

export default Tahun;
