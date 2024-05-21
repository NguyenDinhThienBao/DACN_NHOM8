const { render } = require('node-sass');
const Customer = require('../models/Customer');
class CustomerController {
  async index(req, res) {
    res.render('customer');
    const customer = await Customer.find({});
    res.json(customer);
  }
}
module.exports = new CustomerController;