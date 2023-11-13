const { Estudiante } = require('../../models/associateModels');

const updateEstudiante = async (req, res) => {
    const { id } = req.params;
    try {
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        await estudiante.update(req.body);
        res.json(estudiante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el estudiante' });
    }
};

module.exports = updateEstudiante;
