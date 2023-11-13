const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const packageInfo = require('./package.json');
const cors = require('cors'); // Importa el paquete CORS
const sequelize = require('./utils/database');

// Importa tus archivos de rutas
const estudiantesRoutes = require('./routes/estudiantesRoutes');
const calificacionesRoutes = require('./routes/calificacionesRoutes');
const departamentosRoutes = require('./routes/departamentosRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');
const cursosRoutes = require('./routes/cursosRoutes');
const authRoutes = require('./routes/authRoutes');

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
    apis: ['./docs/*.js'],
};

// Inicializa el swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Configura CORS para permitir solicitudes desde localhost:5173
const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend en localhost
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el intercambio de cookies y encabezados de autenticación
    optionsSuccessStatus: 204, // Responde con un 204 No Content en las pre-vuelos OPTIONS
};

app.use(cors(corsOptions));

// Inicializa el swagger-ui-express
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Utiliza tus rutas
app.use('/estudiantes', estudiantesRoutes);
app.use('/calificaciones', calificacionesRoutes);
app.use('/departamentos', departamentosRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);
app.use('/auth', authRoutes);

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
