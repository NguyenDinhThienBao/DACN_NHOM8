const Customer = require('../models/Customer');
class CustomerController {
  async index(req, res) {

    const customer = await Customer.find({});
    res.json(customer);
  }
}
module.exports = new CustomerController;