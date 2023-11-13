
/**
 * @swagger
 * tags:
 *   name: Profesores
 *   description: Endpoints relacionados con los profesores.
 */

/**
 * @swagger
 * /profesores:
 *   post:
 *     summary: Crea un nuevo profesor.
 *     tags: [Profesores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del profesor.
 *               apellido:
 *                 type: string
 *                 description: Apellido del profesor.
 *               departamento_id:
 *                 type: integer
 *                 description: ID del departamento al que pertenece el profesor.
 *               email:
 *                 type: string
 *                 description: Correo electrónico del profesor.
 *     responses:
 *       201:
 *         description: Profesor creado con éxito.
 *       400:
 *         description: Error en la solicitud debido a datos incorrectos.
 */

/**
 * @swagger
 * /profesores:
 *   get:
 *     summary: Obtiene la lista de profesores.
 *     tags: [Profesores]
 *     responses:
 *       200:
 *         description: Lista de profesores obtenida con éxito.
 */

/**
 * @swagger
 * /profesores/{id}:
 *   get:
 *     summary: Obtiene un profesor por su ID.
 *     tags: [Profesores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profesor obtenido con éxito.
 *       404:
 *         description: Profesor no encontrado.
 */

/**
 * @swagger
 * /profesores/{id}:
 *   put:
 *     summary: Actualiza un profesor por su ID.
 *     tags: [Profesores]
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
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre del profesor.
 *               apellido:
 *                 type: string
 *                 description: Nuevo apellido del profesor.
 *               email:
 *                 type: string
 *                 description: Nuevo correo electrónico del profesor.
 *     responses:
 *       200:
 *         description: Profesor actualizado con éxito.
 *       404:
 *         description: Profesor no encontrado.
 */

/**
 * @swagger
 * /profesores/{id}:
 *   delete:
 *     summary: Elimina un profesor por su ID.
 *     tags: [Profesores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Profesor eliminado con éxito.
 *       404:
 *         description: Profesor no encontrado.
 */
/**
 * @swagger
 * /profesores/{id}/cursos:
 *   get:
 *     summary: Obtiene todos los cursos de un profesor por su ID.
 *     tags: [Profesores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cursos del profesor obtenidos con éxito.
 *       404:
 *         description: Profesor no encontrado.
 */