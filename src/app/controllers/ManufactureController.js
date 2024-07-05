const { render } = require('node-sass');
const Manufacture = require('../models/Manufacture');
const { multipleMongooseToObject } = require('../../util/mongoose');
const Purchase = require('../models/Purchase');
class ManufactureController {
  // async index(req, res, next) {
  //   Manufacture.find({})
  //   .then(manufacture => {
  //     manufacture = manufacture.map(manufacture => manufacture.toObject())
  //     res.render('manufacture', { manufacture });
  //   })
  //   .catch(error => next());
  // }
  async index(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1; // lấy trang hiện tại từ query string, mặc định là 1
      const limit = 9; // số lượng sản phẩm hiển thị trên mỗi trang
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      const manufacture = await Manufacture.find({}).skip(startIndex).limit(limit);
      const totalItems = await Manufacture.countDocuments();
      const totalPages = Math.ceil(totalItems / limit);
  
      res.render('manufacture', {
        manufacture: manufacture.map(item => item.toObject()),
        currentPage: page,
        totalPages: totalPages,
      });
    } catch (error) {
      next(error);
    }
  }
  
  //[POST]
  async store(req, res, next){
    const manufacture = new Manufacture(req.body);
    if(req.file){
      manufacture.AnhSP = req.file.filename;
    }
    const options ={ style: 'currency', currency: 'VND'}
    manufacture.GiaThanhSPFormatted = manufacture.GiaThanhSP.toLocaleString('vi-VN', options);
    manufacture.save()
    .then(() => {
      const purchase = new Purchase({
        AnhSP: manufacture.AnhSP,
        TenSP: manufacture.TenSP,
        GiaThanhSP: manufacture.GiaThanhSP,
      })
      purchase.save()
      .then(() => res.redirect('/san-xuat'))
      .catch(error => next())
    })
    .catch(error => next());
  }
  }
  module.exports = new ManufactureController;