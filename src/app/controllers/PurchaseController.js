const { render } = require('node-sass');
const Purchase = require('../models/Purchase');
const { multipleMongooseToObject } = require('../../util/mongoose');
class PurchaseController {
  //GET /mua-hang
  // Hiển thị danh sách nhân viên và thêm thẻ nếu có thêm nhân viên mới vào
  async index(req, res, next) {
    Purchase.find({})
    .then(purchase => {
      purchase = purchase.map(purchase=> purchase.toObject())
      res.render('purchase', { purchase });
    })
    .catch(error => next());
  }
    // Hiển thị chi tiết sản phẩm khi click vào nhân viên với slug là mã nhân viên
    async show(req, res, next) {
      Purchase.findOne({TenSP: req.params.slug })
      .then(purchaseDetail => {
        purchaseDetail = purchaseDetail.toObject();
        purchaseDetail.GiaThanhSPFormatted = purchaseDetail.GiaThanhSP.toLocaleString('vi-VN', 
          { style: 'currency', 
            currency: 'VND' 
          }
        );
        res.render('purchaseDetail', {purchaseDetail});
        })
        .catch(error => next());
    }
}
module.exports = new PurchaseController;