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
}
module.exports = new CustomerController;