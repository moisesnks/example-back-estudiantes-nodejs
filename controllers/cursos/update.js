const { Curso } = require('../../models/associateModels');

const updateCurso = async (req, res) => {
    const { id } = req.params;
    try {
        const curso = await Curso.findByPk(id);
        if (!curso) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
        await curso.update(req.body);
        res.json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el curso' });
    }
};

module.exports = updateCurso;