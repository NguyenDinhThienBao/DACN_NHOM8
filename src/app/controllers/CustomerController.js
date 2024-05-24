const { render } = require('node-sass');
const Customer = require('../models/Customer');
class CustomerController {
  //GET /khach-hang
  async index(req, res, next) {
    Customer.find({})
    .then(customer => {
      customer = customer.map(customer => customer.toObject())
      res.render('customer', { customer });
    })
    .catch(error => next());
  }

  //GET /khach-hang/:slug (slug là phần thông tin khách hàng khi chọn)
  show(res, req) {
    res.send('Thông tin khách hàng');
  }
}
module.exports = new CustomerController;