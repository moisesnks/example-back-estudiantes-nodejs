const { Calificacion } = require('../../models/associateModels');

const getAllCalificaciones = async (req, res) => {
    try {
        const calificaciones = await Calificacion.findAll();
        res.json(calificaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las calificaciones' });
    }
};

module.exports = getAllCalificaciones;