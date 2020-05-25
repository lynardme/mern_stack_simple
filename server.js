const express = require("express");
const mongoose = require("mongoose");

const app = express();

// bodyparser middleware
app.use(express.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
