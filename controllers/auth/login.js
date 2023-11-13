const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../../models/associateModels').Usuario;

// Función para iniciar sesión
const login = async (req, res) => {
    try {
        // Obtén los datos del cuerpo de la solicitud
        const { email, contraseña } = req.body;

        // Verifica si el usuario existe en la base de datos
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }

        // Compara la contraseña proporcionada con la almacenada en la base de datos
        const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!contraseñaValida) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }

        // Genera un token de autenticación
        const token = jwt.sign({ id: usuario.id, email: usuario.email, rol: usuario.rol }, 'clave_secreta'); // Reemplaza 'clave_secreta' con una clave secreta segura

        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }
};

module.exports = login;