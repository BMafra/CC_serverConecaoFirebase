const express = require('express');
const router = express.Router();

const usuarios = require('./api/usuaios/usuarios.controler')

router.use("/usuarios" , usuarios);

module.exports = router;