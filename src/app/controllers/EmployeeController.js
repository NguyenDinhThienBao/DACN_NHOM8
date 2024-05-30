const { render } = require('node-sass');
const Employee = require('../models/Employee');
class EmployeeController {
  // GET /nhan-vien
  async index(req, res, next) {
    Employee.find({})
    .then(employee => {
      employee = employee.map(employee => employee.toObject())
      res.render('employee', { employee });
    })
    .catch(error => next());
  }

}
module.exports = new EmployeeController;
