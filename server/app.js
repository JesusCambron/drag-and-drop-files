const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/upload", (req, res) => {
  res.send(`Archivo ${req.files.file.name} subido correctamente al servidor`);
  //mover el archivo
  /* fileUpload.mv() */
});

app.listen(3000, () => {
  console.log("Server is running");
});

/* type node app.js to start the server */
