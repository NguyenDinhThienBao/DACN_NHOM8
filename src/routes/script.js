const express = require('express'); /*lấy express trong node_modules để nạp vào const express*/ 
const app = express(); /*gọi express để trả lại instance (trả lại 1 đối tượng đại diện cho ứng dụng nodejs)*/ 
const employeeRouter = require('./employee.js'); //lấy file index.js trong thư mục routes
const customerRouter = require('./customer.js'); //lấy file index.js trong thư mục routes
const financeRouter = require('./finance.js'); //lấy file index.js trong thư mục routes
const manufactureRouter = require('./manufacture.js'); //lấy file index.js trong thư mục routes
const purchaseRouter = require('./purchase.js'); //lấy file index.js trong thư mục routes
const siteRouter = require('./site.js'); //lấy file index.js trong thư mục routes
function route(app) {
    app.use('/nhan-vien', employeeRouter); //EmployeeController.index là hàm index trong file index.js trong thư mục controllers nó đã bao gồm req và res trong đó
    app.use('/khach-hang', customerRouter); 
    app.use('/tai-chinh', financeRouter);
    app.use('/san-xuat', manufactureRouter);
    app.use('/mua-hang', purchaseRouter);
    app.use('/', siteRouter);
}

module.exports = route;