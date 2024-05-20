const Purchase = require('../models/Purchase');
class PurchaseController {

  async index(req, res) {

    const purchase = await Purchase.find({});
    res.json(purchase);
  }
  }
  module.exports = new PurchaseController;