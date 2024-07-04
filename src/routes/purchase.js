const express = require('express');
const router = express.Router();
const purchaseController = require('../app/controllers/PurchaseController');

router.get('/them-san-pham', purchaseController.add);
router.get('/hoa-don/tao-hoa-don', purchaseController.add);
router.use('/hoa-don', purchaseController.show);
router.use('/', purchaseController.index);


module.exports = router;