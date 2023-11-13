const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');


// Ruta para el registro de usuarios
router.post('/register', authController.register);

// Ruta para el inicio de sesión
router.post('/login', authController.login);

module.exports = router;
