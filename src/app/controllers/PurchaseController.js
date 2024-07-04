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
  async add(req, res, next){
    res.render('createBill');
  }

  //ADD /mua-hang/them-san-pham
  async add(req, res, next){
    res.render('addItems');
  }

}
module.exports = new PurchaseController;