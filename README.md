<<<<<<< HEAD
Backend Taqueria API
Sistema de servidor desarrollado con Node.js, Express y MongoDB para la gestión de una taquería. Este proyecto incluye módulos de autenticación de usuarios y administración de productos mediante operaciones CRUD.

Funcionalidades Principales
Autenticación: Registro y autenticación de usuarios mediante JSON Web Tokens (JWT).

Gestión de Productos: Implementación completa de servicios para crear, leer, actualizar y eliminar registros de tacos.

Persistencia de Datos: Conexión integrada con base de datos NoSQL MongoDB.

Requisitos e Instalación
Para ejecutar este proyecto en un entorno local, siga estas instrucciones:

Descargar el repositorio:
Utilice el comando git clone seguido de la URL de su repositorio.

Instalar dependencias:
Ejecute el siguiente comando en la terminal para descargar las librerías necesarias:
npm install

Configuración de variables:
Debe contar con un archivo .env en la raíz que contenga la variable MONGODB_URI con su cadena de conexión personal.

Inicio del servidor:
Lance el servicio con el comando:
node index.js
El servidor estará disponible en el puerto 4000.

Catálogo de Endpoints
Usuarios
POST /api/users/signup - Registro de nuevos usuarios.

POST /api/users/signin - Inicio de sesión y obtención de token.

Tacos
GET /api/tacos - Obtener la lista completa de tacos.

POST /api/tacos - Registrar un nuevo taco.

PUT /api/tacos/:id - Actualizar información de un taco existente por ID.

DELETE /api/tacos/:id - Eliminar un taco de la base de datos por ID.

Tecnologías Utilizadas
Node.js

Express.js

Mongoose / MongoDB

Bcryptjs

JSON Web Token
=======
# Proyecto-Taqueria
Proyecto 4to Semestre para una Taquería.
>>>>>>> 1b5b6d3aa1626d1294ed599e9ee4c7af246cce80
