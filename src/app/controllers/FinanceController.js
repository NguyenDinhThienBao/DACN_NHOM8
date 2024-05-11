class FinanceController {
    // GET /tai-chinh
    index(req, res) {
      res.render('tai-chinh');
    }

  }
  module.exports = new FinanceController;