
/**
 * @swagger
 * tags:
 *   name: Departamentos
 *   description: Endpoints relacionados con los departamentos.
 */

/**
 * @swagger
 * /departamentos:
 *   post:
 *     summary: Crea un nuevo departamento.
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del departamento.
 *     responses:
 *       201:
 *         description: Departamento creado con éxito.
 *       400:
 *         description: Error en la solicitud debido a datos incorrectos.
 */

/**
 * @swagger
 * /departamentos:
 *   get:
 *     summary: Obtiene la lista de departamentos.
 *     tags: [Departamentos]
 *     responses:
 *       200:
 *         description: Lista de departamentos obtenida con éxito.
 */

/**
 * @swagger
 * /departamentos/{id}:
 *   get:
 *     summary: Obtiene un departamento por su ID.
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Departamento obtenido con éxito.
 *       404:
 *         description: Departamento no encontrado.
 */

/**
 * @swagger
 * /departamentos/{id}:
 *   put:
 *     summary: Actualiza un departamento por su ID.
 *     tags: [Departamentos]
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
 *                 description: Nuevo nombre del departamento.
 *     responses:
 *       200:
 *         description: Departamento actualizado con éxito.
 *       404:
 *         description: Departamento no encontrado.
 */
/**
 * @swagger
 * /departamentos/{id}/cursos:
 *   get:
 *     summary: Obtiene todos los cursos de un departamento específico.
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del departamento del que se desean obtener los cursos.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de cursos obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'  # Reemplaza con la referencia correcta al esquema de Curso
 *       404:
 *         description: No se encontraron cursos en este departamento.
 */