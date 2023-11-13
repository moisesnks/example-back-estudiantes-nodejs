/**
 * @swagger
 * tags:
 *   name: Estudiantes
 *   description: Endpoints relacionados con los estudiantes.
 */

/**
 * @swagger
 * /estudiantes:
 *   post:
 *     summary: Crea un nuevo estudiante (requiere rol de profesor)
 *     tags: [Estudiantes]
 *     description: |
 *       **Instrucciones para probar:**
 *       1. Obtén un token JWT válido con el rol de profesor.
 *       2. Agrega el token JWT en la cabecera de autorización (Bearer <token_jwt>).
 *          Ejemplo de cabecera:
 *          ```
 *          Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *          ```
 *     security:
 *       - bearerAuth: [] # Indica que se requiere un token JWT
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
 *       401:
 *         description: Acceso no autorizado (token JWT no válido o rol incorrecto).
 *       500:
 *         description: Error interno del servidor.
 *
 *   get:
 *     summary: Obtiene la lista de estudiantes.
 *     tags: [Estudiantes]
 *     responses:
 *       200:
 *         description: Lista de estudiantes obtenida con éxito.
 *
 * /estudiantes/{id}:
 *   get:
 *     summary: Obtiene un estudiante por su ID.
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estudiante obtenido con éxito.
 *       404:
 *         description: Estudiante no encontrado.

 *   put:
 *     summary: Actualiza un estudiante por su ID.
 *     tags: [Estudiantes]
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
 *                 description: Nuevo nombre del estudiante.
 *               apellido:
 *                 type: string
 *                 description: Nuevo apellido del estudiante.
 *               email:
 *                 type: string
 *                 description: Nuevo correo electrónico del estudiante.
 *     responses:
 *       200:
 *         description: Estudiante actualizado con éxito.
 *       404:
 *         description: Estudiante no encontrado.

 *   delete:
 *     summary: Elimina un estudiante por su ID.
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estudiante eliminado con éxito.
 *       404:
 *         description: Estudiante no encontrado.

 * /estudiantes/{id}/calificaciones:
 *   get:
 *     summary: Obtiene las calificaciones de un estudiante por su ID.
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Calificaciones del estudiante obtenidas con éxito.
 *       404:
 *         description: Estudiante no encontrado.

 * /estudiantes/{id}/calificaciones/{idCurso}:
 *   get:
 *     summary: Obtiene las calificaciones de un estudiante por su ID y el ID del curso.
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idCurso
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Calificaciones del estudiante para el curso obtenidas con éxito.
 *       404:
 *         description: Estudiante o curso no encontrados.
 */