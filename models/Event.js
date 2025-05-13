const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String },
  date: { type: String },
  venue: { type: String },
  description: { type: String },
  imageUrl: { type: String }, // New field for image URL
  userEmail: {type: String}
});

module.exports = mongoose.model('Event', eventSchema);

// const event = new Event({
//     title: req.body.title,
//     date: req.body.date,
//     venue: req.body.venue,
//     description: req.body.description,
//     banner: req.file?.filename,
//     userId: req.body.userId, // Add this
//   });
  