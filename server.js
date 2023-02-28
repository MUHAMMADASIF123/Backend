// const express = require("express");
import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import { userRoutes } from "../Routes/UserRoutes";
import UserRoute from "./routes/UserRoute.js";

app.use(express.json());
app.use(cors());
app.use(UserRoute);
app.use(bodyParser.json());
//database connection
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.get("/", (req, res) => {
  console.log("hello from server");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(`Server is Running on ${PORT}`);
});
