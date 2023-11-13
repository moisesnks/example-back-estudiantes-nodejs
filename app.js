const express = require('express');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const packageInfo = require('./package.json');


const sequelize = require('./utils/database');

// Importa tus archivos de rutas
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const calificacionesRoutes = require('./routes/calificacionesRoutes');
const departamentosRoutes = require('./routes/departamentosRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const cursosRoutes = require('./routes/cursosRoutes');

const app = express();
app.use(express.json());

// Definiendo las opciones de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: packageInfo.name, // Utiliza el nombre del paquete del package.json
            version: packageInfo.version, // Utiliza la versión del paquete del package.json
            description: packageInfo.description, // Utiliza la descripción del paquete del package.json
        },
    },
    // Especifica los archivos de rutas que contienen los comentarios JSDoc
    apis: ['./routes/*.js'],
};

// Inicializa el swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Inicializa el swagger-ui-express
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Utiliza tus rutas
app.use('/estudiantes', estudiantesRoutes);
app.use('/calificaciones', calificacionesRoutes);
app.use('/departamentos', departamentosRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Manejo básico de errores
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
});

// Sincroniza tus modelos con la base de datos
sequelize.sync()
    .then(result => {
        // Inicia el servidor una vez que los modelos estén sincronizados
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
    })
    .catch(err => console.log(err));

