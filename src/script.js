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


// Connect to db
db.connect(); //gọi hàm connect trong file script.js
//HTTP logger
app.use(morgan('combined'));

app.engine('hbs', engine);
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
  res.render('home'); 
});
app.get('/nhan-vien', (req, res) => {
  res.render('employee');
});
// route(app); //gọi hàm route trong file script.js
// // 127.0.0.1 - localhost
app.listen(port, () => { //lắng nghe port 5500, bắt đâu chạy server
  console.log(`Example app listening on port http://localhost:${port}`);
})

/*===============================================*/


