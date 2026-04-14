const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/topicos.Controllers');

router.get('/', ctrl.getAll);
router.get('/:idt', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:idt', ctrl.update);
router.delete('/:idt', ctrl.delete);

module.exports = router;