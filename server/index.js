import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import dbConnection from "./config/dbConfig.js";
import headerRouter from "./route/HeaderRoute.js";
import detailRouter from "./route/DetailRoute.js";

// for reading env variables
dotenv.config();

const app = express();

// database connections
dbConnection();

// port
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// routes for app
app.use("/api/v1/header", headerRouter);
// app.use("/api/v1/detail", detailRouter);

app.listen(port, () => {
  console.log(`APP LISTEN ON PORT ${port} :)`);
});
