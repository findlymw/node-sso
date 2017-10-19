'use strict';
var express = require('express');
var router = express.Router();

router.use('/',require('./index'));
router.use('/',require('./publicrouter/randomcode'));

module.exports = router;