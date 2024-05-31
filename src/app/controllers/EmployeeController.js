const { render } = require('node-sass');
const Employee = require('../models/Employee');
class EmployeeController {
  // Hiển thị danh sách nhân viên và thêm thẻ nếu có thêm nhân viên mới vào
  async index(req, res, next) {
    Employee.find({})
    .then(employee => {
      employee = employee.map(employee => employee.toObject())
      res.render('employee', { employee });
    })
    .catch(error => next());
  }
  // Hiển thị chi tiết nhân viên khi click vào nhân viên với slug là mã nhân viên
  async show(req, res, next) {
    Employee.findOne({ MaNV: req.params.slug })
    .then(employeeDetail => {
        employeeDetail = employeeDetail.toObject()
        res.render('employeeDetail', {employeeDetail});
      })
      .catch(error => next());
  }
  // Thêm nhân viên vào trong danh sách
async add(req, res, next){
  res.render('addEmployee');
}
//[POST]
async store(req, res, next){
  const employee = new Employee(req.body);
  employee.save()
  .then(() => res.redirect('/'))
  .catch(error => next());
}

}
module.exports = new EmployeeController;
