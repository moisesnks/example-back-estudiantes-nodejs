const { Estudiante } = require('../../models/associateModels');

const createEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = await Estudiante.create(req.body);
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo estudiante' });
    }
};

module.exports = createEstudiante;
