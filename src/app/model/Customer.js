const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer = new Schema({
    MaKH: String,
    HoVaTenKH: { HoKH: String, TenKH: String,},
    NgaySinhKH: Date,
    NoiSinh: String,
    QuocTichKH: String,
    DanTocKH: String,
    TonGiaoKH: String,
    GioiTinh: String,
    TinhTrangSucKhoe: String,
    ThongTinLienLac: { SoDienThoaiKH: String, EmailKH: String, DiaChiKH: String,},
});
module.exports = mongoose.model('KHACHHANG', Customer); //export model Customer
