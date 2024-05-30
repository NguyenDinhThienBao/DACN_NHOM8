const { render } = require('node-sass');
const Employee = require('../models/Employee');
class EmployeeDetailController {
  // GET /nhan-vien
  async show(req, res, next) {
    Employee.findOne({ MaNV: req.params.slug })
    .then(employeeDetail => {
        employeeDetail = employeeDetail.toObject()
        res.render('employeeDetail', {employeeDetail});
      })
      .catch(error => next());
  }

}
module.exports = new EmployeeDetailController;
