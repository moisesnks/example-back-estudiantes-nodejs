const { Curso } = require('../../models/associateModels');

const getCursoById = async (req, res, next) => {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) {
            const error = new Error('Curso no encontrado');
            error.statusCode = 404;
            throw error;
        }
        res.json(curso);
    } catch (error) {
        next(error);
    }
};

module.exports = getCursoById;