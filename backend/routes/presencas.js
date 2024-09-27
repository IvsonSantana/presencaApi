const express = require('express');
const router = express.Router();
const chamadasController = require('../controllers/presencasController');

router.get('/', chamadasController.getAllChamadas);
router.post('/', chamadasController.createChamada);
router.put('/:id', chamadasController.updateChamada);
router.delete('/:id', chamadasController.deleteChamada);

module.exports = router;
