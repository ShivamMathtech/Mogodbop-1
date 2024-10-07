const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, console.log("connected"));

app.post("/shivam", function (req, res) {
  res.status(200).json({
    msg: "Successfully",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server in Running on Port ${PORT}`);
});
