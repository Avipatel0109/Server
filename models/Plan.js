const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: String,
  durationDays: Number
});

module.exports = mongoose.model('Plan', planSchema);
