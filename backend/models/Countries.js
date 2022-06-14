const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  country: {
    type: Object,
  },
});

module.exports = mongoose.model("Country", CountrySchema);
