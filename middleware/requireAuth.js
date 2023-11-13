const jwt = require('jsonwebtoken');
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

// Verifica si el usuario está autenticado
const requireAuth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso no autorizado' });
    }

    try {
        // Verifica y decodifica el token utilizando la variable de entorno
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded.user; // Almacena el usuario decodificado en req.user
        next(); // Continúa con la siguiente middleware
    } catch (error) {
        res.status(401).json({ mensaje: 'Token no válido' });
    }
};

module.exports = requireAuth;
