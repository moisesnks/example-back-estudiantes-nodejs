const { Departamento } = require('../../models/associateModels');

const createDepartamento = async (req, res) => {
    try {
        const nuevoDepartamento = await Departamento.create(req.body);
        res.status(201).json(nuevoDepartamento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo departamento' });
    }
};

module.exports = createDepartamento;