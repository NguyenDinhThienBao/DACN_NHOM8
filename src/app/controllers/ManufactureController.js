const { render } = require('node-sass');
const Manufacture = require('../models/Manufacture');
const { multipleMongooseToObject } = require('../../util/mongoose');
class ManufactureController {
  /*
  async index(req, res) {

    const manufacture = await Manufacture.find({});
    res.json(manufacture);
  }
  */

  async index(req, res, next) {
    Manufacture.find({})
    .then(manufacture => {
      manufacture = manufacture.map(manufacture => manufacture.toObject())
      res.render('manufacture', { manufacture });
    })
    .catch(error => next());
  }

  }
  module.exports = new ManufactureController;