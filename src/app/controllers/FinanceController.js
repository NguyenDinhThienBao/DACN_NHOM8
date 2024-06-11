const { render } = require('node-sass');
const Finance = require('../models/Finance');
const { multipleMongooseToObject } = require('../../util/mongoose');
class FinanceController {
  //GET /tai-chinh
  async index(req, res, next) {
    Finance.find({})
    .then(finance => {
      res.render('finance', { 
        finance: multipleMongooseToObject(finance) 
      });
    })
    .catch(error => next());
  }
    
}
module.exports = new FinanceController;