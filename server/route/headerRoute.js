import express from "express";
import {
  addHeaderTable,
  getAllHeaderTable,
} from "../controller/HeaderController.js";

const headerRouter = express.Router();

headerRouter.route("/").get(getAllHeaderTable).post(addHeaderTable);

export default headerRouter;
