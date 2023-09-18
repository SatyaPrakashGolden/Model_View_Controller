// model.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
