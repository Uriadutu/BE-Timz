import Gl from "../Models/GlModel.js";

export const getGl = async (req, res) => {
  try {
    const response = await Gl.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const getGlById = async (req, res) => {
  try {
    const response = await Gl.findOne({
      where: {
        id_gl: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ditemukan" });
  }
};

export const createGl = async (req, res) => {
  const { id_gl, nama_gl } = req.body;
  try {
    await Gl.create({
      id_gl,
      nama_gl,
    });
    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};

export const deleteGl = async (req, res) => {
  try {
    const gl = await Gl.findOne({
      where: {
        id_gl: req.params.id,
      },
    });

    if (!gl) {
      res.status(404).json({ msg: "Data Tidak Ditemukan" });
    }
    await gl.destroy();

    res.status(200).json({ msg: "Data Berhasil Dibuat" });
  } catch (error) {
    res.status(404).json({ msg: "Data Gagal Dibuat" });
  }
};
