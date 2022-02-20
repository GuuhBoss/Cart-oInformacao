const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello from node");
});

port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});

// db connection

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//import routes
const authRoutes = require("./routes/auth");

// middleware routes
app.use(authRoutes);

// frontend connection

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});
