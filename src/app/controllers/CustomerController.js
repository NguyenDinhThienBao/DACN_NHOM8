const { render } = require('node-sass');
const Customer = require('../models/Customer');
const { multipleMongooseToObject } = require('../../util/mongoose');
class CustomerController {
  //GET /khach-hang (Hiển thị danh sách khách hàng)
  async index(req, res, next) {
    Customer.find({})
    .then(customer => {
      res.render('customer', { 
        customer: multipleMongooseToObject(customer) 
      });
    })
    .catch(error => next());
  }

  // Hiển thị chi tiết khách hàng khi click vào khách hàng với slug là mã khách hàng
  async show(req, res, next) {
    Customer.findOne({ MaKH: req.params.slug })
    .then(customerDetail => {
        customerDetail = customerDetail.toObject()
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        customerDetail.ThoiGianGiaoDichFormatted = customerDetail.ThoiGianGiaoDich.toLocaleDateString('vi-VN', options);
        res.render('customerDetail', {customerDetail});
      })
      .catch(error => next());
  }

  // Thêm khách hàng vào trong danh sách
  async add(req, res, next){
    res.render('addCustomer');
  }

  //[POST]
  async store(req, res, next){
    const customer = new Customer(req.body);
    customer.save()
    .then(() => res.redirect('/khach-hang'))
    .catch(error => next());
  }

  // Chỉnh sửa thông tin khách hàng
  async edit(req, res, next){
    Customer.findById(req.params.id)
    .then(customerDetail => {
      customerDetail = customerDetail.toObject()
      res.render('editCustomer', {customerDetail});
    })
    .catch(error => next());
  }

  // [PUT] Lưu thông tin khách hàng đã chỉnh sửa
  async update(req, res, next){
    Customer.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/', MaKH))
    .catch(error => next());
  }

  // [DELETE]
  async delete(req, res, next){
    Customer.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(error => next());
  }

}
module.exports = new CustomerController;