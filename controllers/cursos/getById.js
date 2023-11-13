const { Curso } = require('../../models/associateModels');

const getAllCursos = async (req, res) => {
    try {
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los cursos' });
    }
};

module.exports = getAllCursos;