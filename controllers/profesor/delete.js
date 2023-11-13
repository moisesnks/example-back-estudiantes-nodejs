const { Profesor } = require('../../models/associateModels');

const deleteProfesor = async (req, res) => {
    const { id } = req.params;
    try {
        const profesor = await Profesor.findByPk(id);
        if (!profesor) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        await profesor.destroy();
        res.json(profesor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el profesor' });
    }
};

module.exports = deleteProfesor;