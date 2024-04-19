/*back end*/ /*======tải express.js==========*/
const express = require('express'); /*lấy express trong node_modules để nạp vào const express*/ 
const morgan = require('morgan');
//const handlebars = require('express-handlebars');
const app = express(); /*gọi express để trả lại instance (trả lại 1 đối tượng đại diện cho ứng dụng nodejs)*/ 
const port = 3000; //port website

//HTTP logger
app.use(morgan('combined'));

//template engine
//app.engine('handlebars', handlebars()); //app dùng template engine là handlebars, name đặt là handlebars, lấy thư viện đã khai báo ở trên thả vào handlebars()
//app.set('view engine', 'handlebars'); //set view engine dùng hanlebars, set-đặt cho ứng dụng express sử dụng view engine và handlebars, dùng handlebars ở dòng trên

//đinh nghĩa route / 
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

/*===============================================*/


