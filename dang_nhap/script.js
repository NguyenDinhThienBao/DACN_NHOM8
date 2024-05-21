const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const templatePath = path.join(__dirname,'../dang_nhap')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.render("login");
})

app.post("/dang_nhap", async (req, res) =>{
    try{
        const check = await collection.findOne({name: req.body.name})

        if (check.password===req.body.password) {
            res.render("index");
        }
        else {
            res.send("wrong pasword");
        }
    }
    catch{
        res.send("wrong detail");
    }
    
}) 

app.listen(port, () => { //lắng nghe port 5500, bắt đâu chạy server
    console.log(`Example app listening on port http://localhost:${port}`);
})
