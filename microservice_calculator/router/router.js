const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');
const validateInput = require('../middleware/input');

router.post('/calculate', validateInput, controller.calculate);

router.get('/history', controller.getHistory);

module.exports = router;