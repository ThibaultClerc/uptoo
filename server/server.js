require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
const itemsRouter = require('./routes/itemRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to the remote MongoDB database named Uptoo");
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
