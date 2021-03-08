const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  description: String,
  data: [
    {
      _id: false,
      key: String,
      value: String,
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
