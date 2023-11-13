const { Profesor } = require('../../models/associateModels');

const createProfesor = async (req, res) => {
    try {
        const nuevoProfesor = await Profesor.create(req.body);
        res.status(201).json(nuevoProfesor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo profesor' });
    }
};

module.exports = createProfesor;