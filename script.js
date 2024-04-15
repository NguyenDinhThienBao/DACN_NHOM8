/*back end*/ /*======tải express.js==========*/
const express = require('express') /*lấy express trong node_modules để nạp vào const express*/ 
const morgan = require('morgan')
const app = express() /*gọi express để trả lại instance (trả lại 1 đối tượng đại diện cho ứng dụng nodejs)*/ 
const port = 3000 //port website

app.use(morgan('combined'))

//đinh nghĩa route / 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*===============================================*/


