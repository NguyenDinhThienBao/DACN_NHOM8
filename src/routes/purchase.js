const express = require('express');
const router = express.Router();
const purchaseController = require('../app/controllers/PurchaseController');

router.get('/:slug', purchaseController.show);
router.use('/', purchaseController.index);

module.exports = router;