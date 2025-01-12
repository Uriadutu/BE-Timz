import Departemen from "../Models/DepartemenModel.js";
import Gl from "../Models/GlModel.js";
import Invoice from "../Models/InvoiceModel.js";
import Vendor from "../Models/VendorModel.js";

// Mendapatkan semua invoice
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll({
      include: [
        {
          model: Vendor,
        },
        { model: Gl },
        {model : Departemen}
      ],
    });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching invoices", error });
  }
};

// Mendapatkan invoice berdasarkan ID
export const getInvoiceById = async (req, res) => {
    try {
    const invoice = await Invoice.findOne({
      where : {
        id : req.params.id
      },
       include: [
        {
          model: Vendor,
        },
        { model: Gl },
        {model : Departemen}
      ],
    });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: "Error fetching invoice", error });
  }
};

// Mendapatkan invoice berdasarkan ID
export const getInvoiceByBulan = async (req, res) => {
  try {
    const invoice = await Invoice.findAll({
      where: {
        bulanTahun: req.params.bulan,
      },
      include: [
        {
          model: Vendor,
        },
        { model: Gl },
        {model : Departemen}
      ],
    });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: "Error fetching invoice", error });
  }
};

// Menambahkan invoice baru
export const createInvoice = async (req, res) => {
  const {
    tglInvoiceGAHR,
    tglInvoiceFinance,
    nomorInvoice,
    po,
    tglInvoice,
    totalInvoice,
    faktorPajak,
    jenisPengiriman,
    ppn,
    lainnya = "0",
    bulanTahun = "0",
    totalDenganPPN = "0",
    vat23 = "0",
    totalBayarVendor = "0",
    deskripsi,
    id_gl,
    id_departemen,
    id_vendor,
  } = req.body;

  try {
    const newInvoice = await Invoice.create({
      bulanTahun,
      po,
      totalInvoice,
      deskripsi,
      totalDenganPPN,
      vat23,
      totalBayarVendor,
      faktorPajak,
      tglInvoiceGAHR,
      tglInvoiceFinance,
      tglInvoice,
      nomorInvoice,
      ppn,
      lainnya,
      jenisPengiriman,
      id_gl,
      id_departemen,
      id_vendor,
    });

    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(500).json({ message: "Error adding invoice", error });
    console.log(error);
  }
};

// Mengupdate invoice berdasarkan ID
export const updateInvoice = async (req, res) => {
  const { id } = req.params;
  const {
    bulanTahun,
    tglInvoiceGAHR,
    tglInvoiceFinance,
    idVendor,
    namaVendor,
    tglInvoice,
    nomorInvoice,
    po,
    totalInvoice,
    ppn,
    lainnya,
    totalDenganPPN,
    vat23,
    totalBayarVendor,
    faktorPajak,
    departemen,
    idDepartemen,
    jenisPengiriman,
    gl,
    deskripsi,
  } = req.body;

  try {
    const updatedInvoice = await Invoice.update(
      {
        bulanTahun,
        tglInvoiceGAHR,
        tglInvoiceFinance,
        idVendor,
        namaVendor,
        tglInvoice,
        nomorInvoice,
        po,
        totalInvoice,
        ppn,
        lainnya,
        totalDenganPPN,
        vat23,
        totalBayarVendor,
        faktorPajak,
        departemen,
        idDepartemen,
        jenisPengiriman,
        gl,
        deskripsi,
      },
      {
        where: { id },
        returning: true,
      }
    );

    if (updatedInvoice[0] === 0) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(updatedInvoice[1][0]);
  } catch (error) {
    res.status(500).json({ message: "Error updating invoice", error });
  }
};

// Menghapus invoice berdasarkan ID
export const deleteInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedInvoice = await Invoice.destroy({
      where: { id },
    });

    if (!deletedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting invoice", error });
  }
};
