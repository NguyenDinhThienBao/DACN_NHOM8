class EmployeeController {
  // GET /nhan-vien
  index(req, res) {
    res.render('nhan-vien');
  }
}
module.exports = new EmployeeController;
