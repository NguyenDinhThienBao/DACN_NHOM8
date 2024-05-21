const { render } = require('node-sass');
const Employee = require('../models/Employee');
class EmployeeController {
  // GET /nhan-vien
  async index(req, res) {
    res.render('employee');
    // const employee = await Employee.find({});
    // res.json(employee);
  }
}
module.exports = new EmployeeController;
