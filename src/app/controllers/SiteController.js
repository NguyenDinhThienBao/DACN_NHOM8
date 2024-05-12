class SiteController {
    // GET /trang-chu
    index(req, res) {
      res.render('trang-chu');
    }

  }
  module.exports = new SiteController;