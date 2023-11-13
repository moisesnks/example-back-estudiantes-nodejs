const { Estudiante } = require('../../models/associateModels');

const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los estudiantes' });
    }
};

module.exports = getAllEstudiantes;
