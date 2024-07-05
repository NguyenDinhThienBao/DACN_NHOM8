const { render } = require('node-sass');
const Purchase = require('../models/Purchase');
const { multipleMongooseToObject } = require('../../util/mongoose');
class PurchaseController {
  //GET /mua-hang
  async index(req, res, next) {
    Purchase.find({})
    .then(purchase => {
      res.render('purchase', { 
        purchase: multipleMongooseToObject(purchase) 
      });
    })
    .catch(error => next());
  }

  // Hiển thị chi tiết sản phẩm khi click vào sản phẩm với slug là mã sản phẩm
  async show(req, res, next) {
    Purchase.findOne({ MaSP: req.params.slug })
    .then(purchaseDetail => {
      purchaseDetail = purchaseDetail.toObject();
      res.render('purchaseDetail', {purchaseDetail});
    })
    .catch(error => next());
  }

  //GET /mua-hang/hoa-don
  async show(req, res, next) {
    Purchase.find({})
    .then(billpurchase => {
      res.render('billpurchase', { 
        billpurchase: multipleMongooseToObject(billpurchase) 
      });
    })
    .catch(error => next());
  }

  //ADD /hoa-don/tao-hoa-don
  /*async add(req, res, next){
    res.render('createBill');
  }*/

  //ADD /mua-hang/them-san-pham
  async add(req, res, next){
    res.render('addItems');
  }

  //[POST]
  async store(req, res, next){
    const purchase = new Purchase(req.body);
    if(req.file){
      purchase.AnhSP = req.file.filename;
    }
    purchase.save()
    .then(() => res.redirect('/mua-hang'))
    .catch(error => next());
  }




  // [DELETE]
  async delete(req, res, next){
    Purchase.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(error => next());
  }

}
module.exports = new PurchaseController;