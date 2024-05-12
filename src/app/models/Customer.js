const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer = new Schema({
    HoVaTenKH: {
        HoKH: String,
        TenKH: String,
    },
    SoSanPhamTieuThu: Number,
    SoTienTieuThu: Number,
    EmailLienLac: String,
    DiaChiLienLac: String,
    LichSuGiaoDich: {
        ThoiGianGiaoDich: Date,
        TenSanPhamGiaoDich: String,
        SoLuongGiaoDich: Number,
        TongTien: Number,
        TrangThaiGiaoDich: String,
    },
});
module.exports = mongoose.model('Customer', Customer); //export model Customer
