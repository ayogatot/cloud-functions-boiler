const admin = require("firebase-admin");
const express = require("express");

const db = admin.firestore();

const app = express.Router();

app.get("/users", (req, res) => {
  res.status(200).json({
    error: false,
    errorMessage: null,
    data: []
  });
});

module.exports = app;
