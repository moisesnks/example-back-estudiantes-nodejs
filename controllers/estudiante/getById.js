const { Estudiante } = require('../../models/associateModels');

const getEstudianteById = async (req, res) => {
    const { id } = req.params;
    try {
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        res.json(estudiante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el estudiante por ID' });
    }
};

module.exports = getEstudianteById;
