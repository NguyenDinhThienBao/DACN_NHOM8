const Finance = require('../models/Finance');
class FinanceController {
  async index(req, res) {

    const finance = await Finance.find({});
    res.json(finance);
  }
  }
  module.exports = new FinanceController;