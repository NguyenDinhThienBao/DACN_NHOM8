const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Purchase = new Schema({
    MaHD: String,
    MaKH: String,
    MaNV: String,
    NgayLapHD: Date,
    TongTien: Number,
    TrangThai: String,
    ChiTietHD: [{
        MaSP: String,
        SoLuong: Number,
        DonGia: Number,
    }],
});
module.exports = mongoose.model('Purchase', Purchase); //export model Purchase