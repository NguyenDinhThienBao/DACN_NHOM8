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

}
module.exports = new PurchaseController;