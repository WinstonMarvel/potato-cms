const express = require('express');
const router = express.Router();

router.use('/api', require('./json-api'));
router.use(express.static('public'));
router.use('/', require('./website'));

module.exports = router;