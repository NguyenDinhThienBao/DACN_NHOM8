const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');


router.get('/:slug', customerController.show);
router.use('/', customerController.index);



module.exports = router;