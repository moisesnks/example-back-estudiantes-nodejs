const { Calificacion } = require('../../models/associateModels');

const createCalificacion = async (req, res) => {
    try {
        const nuevaCalificacion = await Calificacion.create(req.body);
        res.status(201).json(nuevaCalificacion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear una nueva calificacion' });
    }
};

module.exports = createCalificacion;