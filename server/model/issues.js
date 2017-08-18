const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let issueSchema = new Schema({
  seq: { type: Number, unique: true },
  Status: { type: String },
  Category: { type: String },
  Title: { type: String },
  Owner: { type: String },
  Priority: { type: String }
});

module.exports = mongoose.model('issuelist', issueSchema, 'issuelist');
