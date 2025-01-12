import express from "express"
import { getDepartemen, getDepartemenById, createDepartemen, deleteDepartemen } from "../Controlers/Departemen.js"
const Route = express.Router()

Route.get("/departemen", getDepartemen)
Route.get("/departemen/:id", getDepartemenById)
Route.post("/departemen", createDepartemen)
Route.delete("/departemen/:id", deleteDepartemen)

export default Route;