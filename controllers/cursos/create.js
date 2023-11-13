const { Curso } = require('../../models/associateModels');

const createCurso = async (req, res) => {
    try {
        const nuevoCurso = await Curso.create(req.body);
        res.status(201).json(nuevoCurso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo curso' });
    }
};

module.exports = createCurso;