const { Estudiante } = require('../../models/associateModels');

const deleteEstudiante = async (req, res) => {
    const { id } = req.params;
    try {
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        await estudiante.destroy();
        res.json({ mensaje: 'Estudiante eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el estudiante' });
    }
};

module.exports = deleteEstudiante;
