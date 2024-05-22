const mongoose = require('mongoose'); // mongoose giúp biến document trong mongodb thành các object trong javascript
const Schema = mongoose.Schema;

const Employee = new Schema({
    AnhNV: String,
    MaNV: String,
    HoNV: String, 
    TenNV: String,
    NgaySinhNV: Date,
    NoiSinh: String,
    ThamNienLamViec: Number,
    ThoiGianBatDau: Date,
    QuocTichNV: String,
    DanTocNV: String,
    TonGiaoNV: String,
    ViTriLamViec: String,
    ChuyenMonLamViec: String,
    LoaiNV: String,
    GioiTinh: String,
    TinhTrangSucKhoe: String,
    SoDienThoaiNV: String, 
    EmailNV: String, 
    DiaChiNV: String,
});

module.exports = mongoose.model('Employee', Employee); //export model Employee