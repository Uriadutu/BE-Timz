import express from "express"
import { getVendor, getVendorById, createVendor, deleteVendor, getVendorByTipe } from "../Controlers/Vendor.js"

const Route = express.Router()

Route.get("/vendor", getVendor)
Route.get("/vendor/:id", getVendorById)
Route.get("/vendor/jenis/:jenis", getVendorByTipe)
Route.post("/vendor", createVendor)
Route.delete("/vendor/:id", deleteVendor)

export default Route;