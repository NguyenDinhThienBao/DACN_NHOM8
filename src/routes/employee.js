const express = require('express');
const router = express.Router();
const nhanSuController = require('../app/controllers/EmployeeController');

router.use('/', nhanSuController.index);
module.exports = router; //export router để file khác có thể sử dụng được