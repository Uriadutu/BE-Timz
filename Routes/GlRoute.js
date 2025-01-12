import express from "express"
import { getGl, getGlById, createGl, deleteGl } from "../Controlers/Gl.js"
const Route = express.Router()

Route.get("/gl", getGl)
Route.get("/gl/:id", getGlById)
Route.post("/gl", createGl)
Route.delete("/gl/:id", deleteGl)

export default Route;