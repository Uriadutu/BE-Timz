import db from "../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const Vendor = db.define(
  "Vendor",
  {
    id_vendor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama_vendor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jenis_vendor : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  },
  {
    freezeTableName: true,
  }
);

export default Vendor;
