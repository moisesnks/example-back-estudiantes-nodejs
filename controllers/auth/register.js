const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Estudiante, Profesor, Usuario } = require('../../models/associateModels');

// Función para registrar un nuevo usuario
const register = async (req, res) => {
    try {
        // Obtén los datos del cuerpo de la solicitud
        const { nombre, apellido, email, contraseña, rol } = req.body;

        // Verifica si el correo electrónico ya está registrado
        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El correo electrónico ya está registrado' });
        }

        // Cifra la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

        let nuevoUsuario;

        // Verifica el rol y crea el usuario correspondiente
        if (rol === 'estudiante') {
            nuevoUsuario = await Estudiante.create({
                nombre,
                apellido,
                email,
                contraseña: hashedPassword,
            });
        } else if (rol === 'profesor') {
            nuevoUsuario = await Profesor.create({
                nombre,
                apellido,
                email,
                contraseña: hashedPassword,
            });
        } else {
            // Si el rol no es válido, devuelve un error
            return res.status(400).json({ mensaje: 'Rol no válido' });
        }

        // Crea el usuario en la tabla "Usuario"
        await Usuario.create({
            nombre,
            apellido,
            email,
            contraseña: hashedPassword,
            rol,
        });

        res.status(201).json({ mensaje: 'Usuario registrado con éxito', usuario: nuevoUsuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al registrar el usuario' });
    }
};

module.exports = register;
