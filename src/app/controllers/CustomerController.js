class CustomerController {
    // GET /khach-hang
    index(req, res) {
      res.render('khach-hang');
    }

  }
  module.exports = new CustomerController;