const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { teamRoute } = require("./Routes/api.router");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Hacke2Skill");
});
app.use("/api", teamRoute);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`Connected to the database`);
    console.log(`server listening on port ${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
