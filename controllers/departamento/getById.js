const Departamento = require('../../models/departamento');

const getDepartamentoById = async (req, res) => {
    const { id } = req.params;
    try {
        const departamento = await Departamento.findByPk(id);
        if (!departamento) {
            return res.status(404).json({ error: 'Departamento no encontrado' });
        }
        res.json(departamento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el departamento' });
    }
};

module.exports = getDepartamentoById;