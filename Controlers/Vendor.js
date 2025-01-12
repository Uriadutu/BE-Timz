import Vendor from "../Models/VendorModel.js";

export const getVendor = async (req, res) => {
  try {
    const response = await Vendor.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const getVendorById = async (req, res) => {
  try {
    const response = await Vendor.findOne({
      where: {
        id_vendor: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const getVendorByTipe = async (req, res) => {
  try {
    const response = await Vendor.findAll({
      where: {
        jenis_vendor: req.params.jenis,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const createVendor = async (req, res) => {
  const { id_vendor, nama_vendor, jenis_vendor } = req.body;
  try {
    await Vendor.create({
      id_vendor,
      nama_vendor,
      jenis_vendor
    });
    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};

export const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({
      where: {
        id_vendor: req.params.id,
      },
    });

    if (!vendor) {
      res.status(404).json({ msg: "Data Tidak Ditemukan" });
    }
    await vendor.destroy();

    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};
