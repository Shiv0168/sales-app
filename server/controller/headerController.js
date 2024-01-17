import header_table from "../model/HeaderModel.js";

const addHeaderTable = async (req, res) => {
  try {
    const { vr_no, vr_date, ac_name, ac_amt, status } = req.body;

    if (vr_no || vr_date || ac_name || ac_amt || status) {
      const data = await header_table(req.body).save();
      res.status(201).json(data);
    } else {
      res.status(404).json({ message: "All field required !!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllHeaderTable = async (req, res) => {
  const data = await header_table.find();
  res.status(200).json(data);
};

export { addHeaderTable, getAllHeaderTable };
