import mongoose from "mongoose";

const detailModel = new mongoose.Schema(
  {
    vr_no: {
      type: Number,
    },
    sr_no: {
      type: Number,
    },
    item_code: {
      type: String,
    },
    item_name: {
      type: String,
    },
    description: {
      type: String,
    },
    qty: {
      type: Number,
    },
    rate: {
      type: Number,
    },
  },
  { timestamps: true }
);

const detail_table = mongoose.model("detail_table", detailModel);
export default detail_table;
