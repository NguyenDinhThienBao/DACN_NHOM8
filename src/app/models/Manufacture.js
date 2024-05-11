const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Manufacture = new Schema({
    MaSX: String,
    TenSX: String,
    DiaChiSX: String,
    SoDienThoaiSX: String,
    EmailSX: String,
    Website: String,
    ThongTinKhac: String,
});
module.exports = mongoose.model('Manufacture', Manufacture); //export model Manufacture