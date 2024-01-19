const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const User = require("./model/schema");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/indexuser.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/indexadmin.html"));
});

app.post("/submitForm", async (req, res) => {
  const { userid, password } = req.body;

  const newUser = new User({ userid, password });

  console.log(userid);
  console.log(password);

  const existingUser = await User.findOne({ userid });

  if (existingUser) {
    // User already exists, return an error
    return res
      .status(400)
      .json({ error: "User already exists with this userid." });
  }

  try {
    // Saving the user document to MongoDB
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Error saving user to the database." });
  }
});

app.get("/latestUsers", async (req, res) => {
  try {
    // Fetch the latest 2 users from the database
    const latestUsers = await User.find().sort({ _id: -1 }).limit(2);

    res.json(latestUsers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching latest users from the database." });
  }
});

app.listen(3000, () => {
  console.log("server is listening");
});
