/**
 * @swagger
 * /estudiantes:
 *   post:
 *     summary: Crea un nuevo estudiante.
 *     tags: [Estudiantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del estudiante.
 *               apellido:
 *                 type: string
 *                 description: Apellido del estudiante.
 *               email:
 *                 type: string
 *                 description: Correo electrónico del estudiante.
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento del estudiante (formato YYYY-MM-DD).
 *     responses:
 *       201:
 *         description: Estudiante creado con éxito.
 *       400:
 *         description: Error en la solicitud debido a datos incorrectos.
 *       500:
 *         description: Error interno del servidor.
 */
const { Estudiante } = require('../../models/associateModels');

const createEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = await Estudiante.create(req.body);
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo estudiante' });
    }
};

module.exports = createEstudiante;
