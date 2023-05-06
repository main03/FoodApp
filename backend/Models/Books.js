const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const bookschema = new mongooose.Schema(
  {
    FlavourName: {
      type: String,
      unique: true,
      required: true,
    },

 
    PizzaImage: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongooose.model("products", bookschema);