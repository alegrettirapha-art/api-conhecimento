const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/questoes.Controllers');

// rotas específicas primeiro
router.get('/search', ctrl.search);
router.get('/topico/:topid', ctrl.getByTopico);
router.get('/view/completo', ctrl.getView);

// CRUD depois
router.get('/', ctrl.getAll);
router.get('/:idq', ctrl.getById);
router.post('/', ctrl.create);
router.get('/view/view',ctrl.listaView);
router.get('/palavra/:palavra',ctrl.buscaPalavra);
router.put('/:idq', ctrl.update);
router.delete('/:idq', ctrl.delete);

module.exports = router;