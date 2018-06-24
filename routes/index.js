const express = require('express');
const router = express.Router();

router.use('/', require('./json-api'));
router.use('/', require('./website'));

module.exports = router;