import Departemen from "../Models/DepartemenModel.js";

export const getDepartemen = async (req, res) => {
  try {
    const response = await Departemen.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const getDepartemenById = async (req, res) => {
  try {
    const response = await Departemen.findOne({
      where: {
        id_departemen: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const createDepartemen = async (req, res) => {
  const { id_departemen, nama_departemen } = req.body;
  try {
    const existingDepartemen = await Departemen.findOne({
      where: { id_departemen },
    });

    if (existingDepartemen) {
      return res.status(400).json({ msg: "ID Departemen sudah ada" });
    }

    await Departemen.create({
      id_departemen,
      nama_departemen,
    });
    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan, data gagal dibuat" });
  }
};

export const deleteDepartemen = async (req, res) => {
  try {
    const depar = await Departemen.findOne({
      where: {
        id_departemen: req.params.id,
      },
    });

    if (!depar) {
      res.status(404).json({ msg: "Data Tidak Ditemukan" });
    }
    await depar.destroy();

    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};
