const { Profesor } = require('../../models/associateModels');

const updateProfesor = async (req, res) => {
    const { id } = req.params;
    try {
        const profesor = await Profesor.findByPk(id);
        if (!profesor) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        await profesor.update(req.body);
        res.json(profesor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el profesor' });
    }
};

module.exports = updateProfesor;