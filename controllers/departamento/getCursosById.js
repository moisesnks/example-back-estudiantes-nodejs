const Curso = require('../../models/associateModels').Curso;

const getCursosById = async (req, res) => {
    try {
        // Obtiene el ID del departamento desde los parámetros de la ruta
        const { id } = req.params;

        // Busca todos los cursos que pertenecen al departamento especificado
        const cursos = await Curso.findAll({
            where: { departamento_id: id },
        });

        // Si se encuentran cursos, devuélvelos como respuesta
        if (cursos.length > 0) {
            return res.status(200).json(cursos);
        }

        // Si no se encuentran cursos, devuelve un mensaje indicando que no se encontraron cursos en ese departamento.
        return res.status(404).json({ message: 'No se encontraron cursos en este departamento.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al obtener los cursos.' });
    }
};

module.exports = getCursosById;
