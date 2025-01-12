import Tahun from "../Models/TahunModel.js";

export const getTahun = async (req, res) => {
  try {
    const response = await Tahun.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const getTahunById = async (req, res) => {
  try {
    const response = await Tahun.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const getTahunbyBulan = async (req, res) => {
  try {
    const response = await Tahun.findAll({
      where: {
        bulan: req.params.bulan,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const createTahun = async (req, res) => {
  const { bulan, tahun, jenis_vendor } = req.body;
  let kodeVendor = 0;
  
  if(jenis_vendor === "Lokal") {
    kodeVendor = 1;
  } else {
    kodeVendor = 2;
  }
  console.log(jenis_vendor, kodeVendor);
  try {
    await Tahun.create({
      id: `${tahun}${kodeVendor}` ,
      bulan,
      tahun,
      jenis_vendor,
    });
    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};

export const deleteTahun = async (req, res) => {
  try {
    const tahun = await Tahun.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!tahun) {
      res.status(404).json({ msg: "Data Tidak Ditemukan" });
    }
    await tahun.destroy();

    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};
