import express from "express";
import { getInvoiceById, getAllInvoices, getInvoiceByBulan,createInvoice, updateInvoice, deleteInvoice } from "../Controlers/Invoice.js";

const router = express.Router();

router.get("/invoice/", getAllInvoices);
router.get("/invoice/:id", getInvoiceById);
router.get("/invoice/bulan/:bulan", getInvoiceByBulan);
router.post("/invoice/", createInvoice);
router.patch("/invoice/:id", updateInvoice);
router.delete("/invoice/:id", deleteInvoice);

export default router;