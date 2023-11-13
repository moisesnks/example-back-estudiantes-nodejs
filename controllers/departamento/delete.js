const { Departamento } = require('../../models/associateModels');

const deleteDepartamento = async (req, res) => {
    const { id } = req.params;
    try {
        const departamento = await Departamento.findByPk(id);
        if (!departamento) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        await departamento.destroy();
        res.json(departamento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el departamento' });
    }
};

module.exports = deleteDepartamento;