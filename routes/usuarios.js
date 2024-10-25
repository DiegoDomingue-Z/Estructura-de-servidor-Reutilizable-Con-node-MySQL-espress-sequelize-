const { Router } = require('express');
const {
usuariosConsulta,
actualizarUsuario,
usuarioId,
eliminarUsuario} = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosConsulta);

router.get('/:id', usuarioId);

router.put('/:idss',   actualizarUsuario);

router.delete('/:id', eliminarUsuario);


module.exports = router;