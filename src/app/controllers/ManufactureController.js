const { render } = require('node-sass');
const Manufacture = require('../models/Manufacture');
const { multipleMongooseToObject } = require('../../util/mongoose');
const Purchase = require('../models/Purchase');
class ManufactureController {
  async index(req, res, next) {
    Manufacture.find({})
    .then(manufacture => {
      manufacture = manufacture.map(manufacture => manufacture.toObject())
      res.render('manufacture', { manufacture });
    })
    .catch(error => next());
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