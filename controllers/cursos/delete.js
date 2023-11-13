const { Curso } = require('../../models/associateModels');

const deleteCurso = async (req, res) => {
    const { id } = req.params;
    try {
        const curso = await Curso.findByPk(id);
        if (!curso) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
        await curso.destroy();
        res.json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el curso' });
    }
};

module.exports = deleteCurso;

