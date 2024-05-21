/*back end*/ /*======tải express.js==========*/
'use strict';
const express = require('express'); /*lấy express trong node_modules để nạp vào const express*/ 
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const path = require('path');
const route = require('./routes/script.js'); //lấy file index.js trong thư mục routes
const db = require('./config/db/script.js'); //lấy file index.js trong thư mục db
//const handlebars = require('express-handlebars');
const app = express(); /*gọi express để trả lại instance (trả lại 1 đối tượng đại diện cho ứng dụng nodejs)*/ 
const port = 5500; //port website

app.use(express.static(path.join(__dirname, 'public'))); //lấy đường dẫn public (xử lý static file)


// Connect to db
db.connect(); //gọi hàm connect trong file script.js
//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine('hbs', engine); //cấu hình handlebars
app.set('views', path.join(__dirname, 'resources/views')); //cấu hình đường dẫn views
app.engine('.hbs', engine({ 
  defaultLayout: 'main',  //cấu hình layout mặc định
  layoutsDir: path.join(app.get('views'), 'layouts'), //cấu hình đường dẫn layout
  partialsDir: path.join(app.get('views'), 'partials'), //cấu hình đường dẫn partials
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Trả về trang chủ
app.get('/', (req, res) => {
  res.render('home'); 
});
//Về trang nhân viên
app.get('/nhan-vien', (req, res) => {
  res.render('employee');
});
//Về trang khách hàng
app.get('/customer', (req, res) => {
  res.render('customer');
})
// route(app); //gọi hàm route trong file script.js
// // 127.0.0.1 - localhost
app.listen(port, () => { //lắng nghe port 5500, bắt đâu chạy server
  console.log(`Example app listening on port http://localhost:${port}`);
})

/*===============================================*/


