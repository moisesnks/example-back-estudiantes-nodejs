/**
 * @swagger
 * tags:
 *   name: Calificaciones
 *   description: Endpoints relacionados con las calificaciones.
 */

/**
 * @swagger
 * /calificaciones:
 *   post:
 *     summary: Crea una nueva calificación.
 *     tags: [Calificaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estudiante_id:
 *                 type: integer
 *                 description: ID del estudiante asociado a la calificación.
 *               curso_id:
 *                 type: integer
 *                 description: ID del curso asociado a la calificación.
 *               nota:
 *                 type: number
 *                 description: Nota de la calificación (debe estar entre 1.0 y 7.0).
 *     responses:
 *       201:
 *         description: Calificación creada con éxito.
 *       400:
 *         description: Error en la solicitud debido a datos incorrectos.
 */

/**
 * @swagger
 * /calificaciones:
 *   get:
 *     summary: Obtiene la lista de calificaciones.
 *     tags: [Calificaciones]
 *     responses:
 *       200:
 *         description: Lista de calificaciones obtenida con éxito.
 */

/**
 * @swagger
 * /calificaciones/{id}:
 *   get:
 *     summary: Obtiene una calificación por su ID.
 *     tags: [Calificaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Calificación obtenida con éxito.
 *       404:
 *         description: Calificación no encontrada.
 */

/**
 * @swagger
 * /calificaciones/{id}:
 *   put:
 *     summary: Actualiza una calificación por su ID.
 *     tags: [Calificaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nota:
 *                 type: number
 *                 description: Nueva nota de la calificación (debe estar entre 1.0 y 7.0).
 *     responses:
 *       200:
 *         description: Calificación actualizada con éxito.
 *       404:
 *         description: Calificación no encontrada.
 */

/**
 * @swagger
 * /calificaciones/{id}:
 *   delete:
 *     summary: Elimina una calificación por su ID.
 *     tags: [Calificaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Calificación eliminada con éxito.
 *       404:
 *         description: Calificación no encontrada.
 */