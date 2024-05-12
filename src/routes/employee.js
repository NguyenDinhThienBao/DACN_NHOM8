const express = require('express');
const router = express.Router();
const employeeController = require('../app/controllers/EmployeeController'); //lấy file index.js trong thư mục controllers
router.use('/nhan-vien', employeeController.index); //EmployeeController.index là hàm index trong file index.js trong thư mục controllers nó đã bao gồm req và res trong đó    
module.exports = router; //export router để file khác có thể sử dụng được