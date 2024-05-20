const Manufacture = require('../models/Manufacture');
class ManufactureController {
  async index(req, res) {

    const manufacture = await Manufacture.find({});
    res.json(manufacture);
  }

  }
  module.exports = new ManufactureController;