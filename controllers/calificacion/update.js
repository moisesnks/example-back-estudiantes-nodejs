const { Calificacion } = require('../../models/associateModels');

const updateCalificacion = async (req, res) => {
    const { id } = req.params;
    try {
        const calificacion = await Calificacion.findByPk(id);
        if (!calificacion) {
            return res.status(404).json({ error: 'Calificacion no encontrado' });
        }
        await calificacion.update(req.body);
        res.json(calificacion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la calificacion' });
    }
};

module.exports = updateCalificacion;