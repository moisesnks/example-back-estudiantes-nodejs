# Sistema de Calificaciones para Escuelas o Universidades

**Autor:** [moisesnks](https://github.com/moisesnks)

**Fecha:** 2023-11-12

## Descripción General

Este repositorio contiene el backend del sistema de gestión de calificaciones para escuelas o universidades. Facilita a los profesores registrar y gestionar calificaciones, mientras que los estudiantes pueden visualizar sus resultados. Está desarrollado en Node.js, utilizando Express como framework.

## Estructura de la Base de Datos

El sistema utiliza las siguientes tablas:

![Diagrama de la Base de Datos](https://storage.googleapis.com/tisw-data-bucket/gallery/dbdiagram.svg)

- `estudiantes`: Información de los estudiantes (nombre, apellido, correo electrónico, fecha de nacimiento).
- `profesores`: Detalles de los profesores (nombre, apellido, departamento, correo electrónico).
- `cursos`: Lista de cursos (nombre, código, horario).
- `departamentos`: Información de los departamentos académicos.
- `calificaciones`: Registro de calificaciones asignadas a los estudiantes por curso.

## Documentación de la API

La API proporciona endpoints para interactuar con el sistema, incluyendo `/estudiantes`, `/profesores`, `/cursos`, y `/calificaciones`, con métodos GET y POST adecuados.

### Ejemplo de uso

- **Obtener estudiantes**: `GET /estudiantes` devuelve una lista de estudiantes.
- **Registrar estudiante**: `POST /estudiantes` con los datos del estudiante en formato JSON.

### Más ejemplos

Más ejemplos en la documentación de la API en http://localhost:3000/api-docs/.

## Requisitos

- Node.js y npm instalados.
- Una base de datos MySQL configurada con los datos proporcionados en la carpeta `export`.

## Instalación del backend

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Configurar el archivo `.env` con las credenciales de la base de datos.
4. Iniciar el servidor con `npm start`.

## Cargar Datos de Ejemplo en la Base de Datos PostgreSQL

1. Asegúrate de haber clonado el repositorio y configurado las credenciales de la base de datos en el archivo `.env`, como se mencionó en los pasos anteriores.

2. Abre una terminal y navega hasta el directorio del proyecto donde clonaste el repositorio.

3. Ejecuta el siguiente comando para importar los datos de ejemplo desde el archivo `backup-example.sql` a la base de datos PostgreSQL:
   ```
   psql -U TU_USUARIO_DE_POSTGRESQL -d TU_BASE_DE_DATOS -a -f backup-example.sql
   ```

   Reemplaza `TU_USUARIO_DE_POSTGRESQL` con tu nombre de usuario de PostgreSQL y `TU_BASE_DE_DATOS` con el nombre de la base de datos donde deseas importar los datos de ejemplo. Cuando ejecutes este comando, se te pedirá que ingreses la contraseña de tu usuario de PostgreSQL.

4. Una vez que se haya importado el archivo `backup-example.sql`, los datos de prueba ficticios estarán disponibles en tu base de datos PostgreSQL.


## Licencia

El sistema está licenciado bajo la licencia MIT.

