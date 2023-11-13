const Calificacion = require('../../models/associateModels').Calificacion;

const getCalificacionesById = async (req, res) => {
    try {
        // Obtiene el ID del departamento desde los parámetros de la ruta
        const { id } = req.params;

        // Busca todos los cursos que pertenecen al departamento especificado
        const calificaciones = await Calificacion.findAll({
            where: { estudiante_id: id },
        });

        // Si se encuentran cursos, devuélvelos como respuesta
        if (calificaciones.length > 0) {
            return res.status(200).json(calificaciones);
        }

        // Si no se encuentran cursos, devuelve un mensaje indicando que no se encontraron cursos en ese departamento.
        return res.status(404).json({ message: 'No se encontraron calificaciones en este curso.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al obtener las calificaciones.' });
    }
};

module.exports = getCalificacionesById;
