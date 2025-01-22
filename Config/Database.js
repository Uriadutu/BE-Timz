import dotenv from "dotenv"
import { Sequelize } from "sequelize"

dotenv.config()

const db = new Sequelize("db_invoice", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default dbbaru
