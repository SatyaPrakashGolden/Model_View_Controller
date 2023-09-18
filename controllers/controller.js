const Company = require('../model/model.js');
const createCompany = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const company = new Company({ name, email, password });
    await company.save();
    res.status(201).json({ message: 'Company created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const getAllData = async (req, res) => {
  try {
    const companies = await Company.find({});
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const deleteCompany = async (req, res) => {
  const companyId = req.params.id;
  try {
    const deletedCompany = await Company.findOneAndDelete({ _id: companyId });
    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted successfully', deletedCompany });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const updateCompany = async (req, res) => {
  const companyId = req.params.id;
  const { name, email, password } = req.body;
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      { name, email, password },
      { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company updated successfully', updatedCompany });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const patchCompany = async (req, res) => {
  const companyId = req.params.id;
  const { name, email, password } = req.body;

  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      { name, email, password },
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company updated successfully', updatedCompany });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  createCompany,
  getAllData,
  deleteCompany,
  updateCompany,
  patchCompany,
};