// Lưu thông tin trang chủ vào file site.js

const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');


router.use('/', siteController.index);

module.exports = router;