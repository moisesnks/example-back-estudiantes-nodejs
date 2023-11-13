const { Profesor } = require('../../models/associateModels');

const getAllProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.findAll();
        res.json(profesores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los profesores' });
    }
};

module.exports = getAllProfesores;