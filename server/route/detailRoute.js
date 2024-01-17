import express from "express";
import {
  addDetailTable,
  getAllDetailTable,
} from "../controller/DetailController.js";

const detailRouter = express.Router();

detailRouter.route("/").get(getAllDetailTable).post(addDetailTable);

export default detailRouter;
