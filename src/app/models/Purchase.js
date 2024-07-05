const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Purchase = new Schema({
    MaHD: String,
    MaKH: String,
    MaNV: String,
    NgayLapHD: Date,
    TongTien: Number,
    TrangThai: String,
    MaSP: String,
    SoLuong: Number,
    DonGia: String,
    MoTa: String,
    AnhSP: String,
    TenSP: String,
    
});
module.exports = mongoose.model('Purchase', Purchase); //export model Purchase