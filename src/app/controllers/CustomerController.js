const { render } = require('node-sass');
const Customer = require('../models/Customer');
const { multipleMongooseToObject } = require('../../util/mongoose')
class CustomerController {
  //GET /khach-hang
  async index(req, res, next) {
    Customer.find({})
    .then(customer => {
      res.render('customer', { 
        customer: multipleMongooseToObject(customer) 
      });
    })
    .catch(error => next());
  }


  // Hiển thị chi tiết khách hàng khi click vào khách hàng với slug là mã khách hàng
  async show(req, res, next) {
    Customer.findOne({ MaKH: req.params.slug })
    .then(customerDetail => {
        customerDetail = customerDetail.toObject()
        res.render('customerDetail', {customerDetail});
      })
      .catch(error => next());
  }

  
}
module.exports = new CustomerController;