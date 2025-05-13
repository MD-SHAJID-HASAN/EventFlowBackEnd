const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  imageUrl: { type: String }, // New field for image URL
});

module.exports = mongoose.model('Product', productSchema);
