const { Departamento } = require('../../models/associateModels');

const updateDepartamento = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const departamento = await Departamento.findByPk(id);
        if (!departamento) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        departamento.nombre = nombre;
        departamento.descripcion = descripcion;
        await departamento.save();
        res.json(departamento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el departamento' });
    }
};

module.exports = updateDepartamento;