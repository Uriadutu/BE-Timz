import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Gl from "./GlModel.js";
import Vendor from "./VendorModel.js";
import Departemen from "./DepartemenModel.js";
const { DataTypes } = Sequelize;

const Invoice = db.define(
  "Invoice",
  {
    bulanTahun: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tglInvoiceGAHR: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tglInvoiceFinance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tglInvoice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nomorInvoice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    po: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    totalInvoice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ppn: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lainnya: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    totalDenganPPN: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    vat23: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    totalBayarVendor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    faktorPajak: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jenisPengiriman: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_gl : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_vendor : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_departemen : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  },
  {
    freezeTableName: true,
    timestamps: true, // Akan secara otomatis menambahkan createdAt dan updatedAt
  }
);


Gl.hasMany(Invoice);
Invoice.belongsTo(Gl, { foreignKey: "id_gl" });

Vendor.hasMany(Invoice);
Invoice.belongsTo(Vendor, { foreignKey: "id_vendor" });

Departemen.hasMany(Invoice); // Memberikan alias pada asosiasi
Invoice.belongsTo(Departemen, { foreignKey: "id_departemen" }); // Gunakan alias yang sama

export default Invoice;
