
/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Endpoints relacionados con los cursos.
 */

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Crea un nuevo curso.
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del curso.
 *               descripcion:
 *                 type: string
 *                 description: Descripción del curso.
 *               profesor_id:
 *                 type: integer
 *                 description: ID del profesor que imparte el curso.
 *               horario:
 *                 type: string
 *                 description: Horario del curso.
 *               departamento_id:
 *                 type: integer
 *                 description: ID del departamento al que pertenece el curso.
 *     responses:
 *       201:
 *         description: Curso creado con éxito.
 *       400:
 *         description: Error en la solicitud debido a datos incorrectos.
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Obtiene la lista de cursos.
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos obtenida con éxito.
 */

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Obtiene un curso por su ID.
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Curso obtenido con éxito.
 *       404:
 *         description: Curso no encontrado.
 */

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Actualiza un curso por su ID.
 *     tags: [Cursos]
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
 *                 description: Nuevo nombre del curso.
 *               descripcion:
 *                 type: string
 *                 description: Nueva descripción del curso.
 *               horario:
 *                 type: string
 *                 description: Nuevo horario del curso.
 *     responses:
 *       200:
 *         description: Curso actualizado con éxito.
 *       404:
 *         description: Curso no encontrado.
 */

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Elimina un curso por su ID.
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Curso eliminado con éxito.
 *       404:
 *         description: Curso no encontrado.
 */