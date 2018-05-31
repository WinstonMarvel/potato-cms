const express = require('express');
const router = express.Router();

router.use('/', require('./website'));
router.use('/', require('./json-api'));

module.exports = router;