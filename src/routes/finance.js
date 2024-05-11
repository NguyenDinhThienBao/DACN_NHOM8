const express = require('express');
const router = express.Router();
const financeController = require('../app/controllers/FinanceController');


router.use('/', financeController.index);


module.exports = router;