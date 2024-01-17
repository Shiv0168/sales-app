import mongoose from "mongoose";

const headerModel = new mongoose.Schema(
  {
    vr_no: {
      type: Number,
    },
    vr_date: {
      type: Date,
    },
    ac_name: {
      type: String,
    },
    ac_amt: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["A", "I"],
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

const header_table = mongoose.model("header_table", headerModel);
export default header_table;
