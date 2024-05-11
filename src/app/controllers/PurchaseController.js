class PurchaseController {
    // GET /ban-hang
    index(req, res) {
      res.render('ban-hang');
    }

  }
  module.exports = new PurchaseController;