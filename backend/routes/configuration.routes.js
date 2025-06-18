const express = require('express');
const router = express.Router();
const configurationController = require('../controller/configuration.controller');


router.get('/:id', configurationController.getConfiguration);


router.put('/:id', configurationController.updateRemark);

module.exports = router; 