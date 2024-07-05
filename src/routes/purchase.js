const express = require('express');
const router = express.Router();
const upload = require('../midleware/upload/script.js');
const purchaseController = require('../app/controllers/PurchaseController');

router.get('/them-san-pham', purchaseController.add);
router.get('/hoa-don/tao-hoa-don', purchaseController.add);
router.use('/hoa-don', purchaseController.show);
router.delete('/:id', purchaseController.delete);
router.post('/luu-san-pham', upload.single("AnhSP"), purchaseController.store);
router.get('/:slug', purchaseController.show);
router.use('/', purchaseController.index);


module.exports = router;