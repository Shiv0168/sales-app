import detail_table from "../model/DetailModel.js";

const addDetailTable = async (req, res) => {
  try {
    const { vr_no, sr_no, item_code, item_name, description, qty, rate } =
      req.body;

    if (
      vr_no ||
      sr_no ||
      item_code ||
      item_name ||
      description ||
      qty ||
      rate
    ) {
      const data = await detail_table(req.body).save();
      res.status(201).json(data);
    } else {
      res.status(404).json({ message: "All field required !!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllDetailTable = async (req, res) => {
  const data = await detail_table.find();
  res.status(200).json(data);
};

export { addDetailTable, getAllDetailTable };
