/*back end*/ /*======tải express.js==========*/
const express = require('express'); /*lấy express trong node_modules để nạp vào const express*/ 
const morgan = require('morgan');
const route = require('./src/routes/script.js'); //lấy file index.js trong thư mục routes
const db = require('./src/config/db/script.js'); //lấy file index.js trong thư mục db
//const handlebars = require('express-handlebars');
const app = express(); /*gọi express để trả lại instance (trả lại 1 đối tượng đại diện cho ứng dụng nodejs)*/ 
const port = 5500; //port website


// Connect to db
db.connect(); //gọi hàm connect trong file script.js
//HTTP logger
app.use(morgan('combined'));

//template engine
//app.engine('handlebars', handlebars()); //app dùng template engine là handlebars, name đặt là handlebars, lấy thư viện đã khai báo ở trên thả vào handlebars()
//app.set('view engine', 'handlebars'); //set view engine dùng hanlebars, set-đặt cho ứng dụng express sử dụng view engine và handlebars, dùng handlebars ở dòng trên

route(app); //gọi hàm route trong file script.js
// 127.0.0.1 - localhost
app.listen(port, () => { //lắng nghe port 5500, bắt đâu chạy server
  console.log(`Example app listening on port http://localhost:${port}`);
})

/*===============================================*/


