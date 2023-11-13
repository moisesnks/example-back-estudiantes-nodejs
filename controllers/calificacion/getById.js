const { Calificacion } = require('../../models/associateModels');

const getCalificacionById = async (req, res) => {
    const { id } = req.params;
    try {
        const calificacion = await Calificacion.findByPk(id);
        if (!calificacion) {
            return res.status(404).json({ error: 'Calificacion no encontrado' });
        }
        res.json(calificacion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la calificacion' });
    }
};

module.exports = getCalificacionById;