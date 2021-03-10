const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  title: String,
  description: String,
  data: [
    {
      key: String,
      value: String,
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
