const { Profesor } = require('../../models/associateModels');

const getProfesorById = async (req, res) => {
    const { id } = req.params;
    try {
        const profesor = await Profesor.findByPk(id);
        if (!profesor) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.json(profesor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el profesor' });
    }
};

module.exports = getProfesorById;