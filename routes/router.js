const express = require('express');
const router = express.Router();
const { createCompany, getAllData, deleteCompany, updateCompany, patchCompany } = require('../controllers/controller.js');

router.post('/logindata', createCompany);

router.get('/getAllData', getAllData);

router.delete('/deleteCompany/:id', deleteCompany);

router.put('/updateCompany/:id', updateCompany);

router.patch('/patchCompany/:id', patchCompany);

module.exports = router;
