const express = require('express');
const router = express.Router();
const manufactureController = require('../app/controllers/ManufactureController');


router.use('/', manufactureController.index);



module.exports = router;