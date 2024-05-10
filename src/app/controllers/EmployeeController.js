class EmployeeController {
  // GET /nhan-su
  index(req, res) {
    res.render('employee');
  }
}
module.exports = new EmployeeController;