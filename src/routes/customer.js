const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');


router.use('/', customerController.index);



module.exports = router;