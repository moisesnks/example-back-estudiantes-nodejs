const { Departamento } = require('../../models/associateModels');

const getAllDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json(departamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los departamentos' });
    }
};

module.exports = getAllDepartamentos;