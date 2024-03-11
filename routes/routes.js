const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/:category', gameController.getWords);

module.exports = router;
