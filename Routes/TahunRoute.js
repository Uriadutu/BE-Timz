import express from "express"
import { getTahun, getTahunById, createTahun, deleteTahun, getTahunbyBulan } from "../Controlers/Tahun.js"
const Route = express.Router()

Route.get("/tahun", getTahun)
Route.get("/tahun/:id", getTahunById)
Route.get("/tahun/bulan/:bulan", getTahunbyBulan)
Route.post("/tahun", createTahun)
Route.delete("/tahun/:id", deleteTahun)

export default Route;