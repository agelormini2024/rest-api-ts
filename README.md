# 🚀 REST API Template con Node.js, Express y TypeScript

## 📚 Descripción

<<<<<<< HEAD
Esta es una plantilla moderna para construir APIs REST usando **Node.js**, **Express** y **TypeScript**. Incluye una arquitectura modular, manejo centralizado de errores, validación de tipos, y buenas prácticas para desarrollo escalable.

---
=======
Este proyecto es una plantilla didáctica para construir APIs REST modernas usando **Node.js**, **Express** y **TypeScript**. Incluye una arquitectura modular, manejo centralizado de errores, pruebas de endpoints y buenas prácticas para escalar y mantener tu API.
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

## 🏗️ Estructura del Proyecto

```
rest-api-ts/
├── server.ts                    # 🚪 Punto de entrada principal
├── src/
│   ├── app.ts                   # 🧠 Configuración central de Express
<<<<<<< HEAD
│   ├── controllers/
│   │   └── userController.ts    # 🎮 Lógica de negocio de usuarios
│   ├── models/
│   │   └── User.ts              # 📝 Modelo e interfaz de datos
│   ├── routes/
│   │   ├── userRoutes.ts        # 🛣️ Rutas de usuarios
│   │   └── healthRoute.ts       # 🛣️ Ruta de salud del servidor
│   ├── middleware/
│   │   └── errorMiddleware.ts   # 🛡️ Manejo centralizado de errores
├── .env                         # 🔒 Variables de entorno
├── package.json                 # 📦 Dependencias y scripts
├── tsconfig.json                # ⚙️ Configuración de TypeScript
├── eslint.config.mts            # 🔍 Configuración de ESLint
├── api.http                     # 🧪 Pruebas de endpoints
├── FLUJO_API_EXPLICACION.md     # 📖 Documentación didáctica detallada
└── README.md                    # 📄 Este archivo
```

---

## 🚀 Flujo de una Petición HTTP

1. **[`server.ts`](server.ts)**: Punto de entrada que inicializa variables de entorno y arranca el servidor Express.

2. **[`src/app.ts`](src/app.ts)**: Configuración central que aplica middlewares en orden crítico:

   - Seguridad (`helmet`)
   - Logging (`morgan`)
   - Parsing JSON (`express.json`, `express.urlencoded`)
   - CORS
   - Rutas (`/api/users`, `/health`)
   - Manejo de errores

3. **Rutas**: Definidas en [`src/routes/userRoutes.ts`](src/routes/userRoutes.ts) y [`src/routes/healthRoute.ts`](src/routes/healthRoute.ts)

4. **Controladores**: Lógica de negocio en [`src/controllers/userController.ts`](src/controllers/userController.ts)

5. **Modelo**: Acceso y validación de datos en [`src/models/User.ts`](src/models/User.ts) (array en memoria)

6. **Respuesta**: JSON estandarizado enviado al cliente

---

## 🛣️ Endpoints Disponibles

| Método | Endpoint         | Descripción                | Body Requerido          |
| ------ | ---------------- | -------------------------- | ----------------------- |
| GET    | `/health`        | Estado del servidor        | -                       |
| GET    | `/api/users`     | Obtener todos los usuarios | -                       |
| GET    | `/api/users/:id` | Obtener usuario específico | -                       |
| POST   | `/api/users`     | Crear nuevo usuario        | `{name, email, age}`    |
| PUT    | `/api/users/:id` | Actualizar usuario         | `{name?, email?, age?}` |
| DELETE | `/api/users/:id` | Eliminar usuario           | -                       |

---

## 📦 Instalación y Uso

### **1. Prerequisitos**

- Node.js (v18 o superior)
- npm o yarn
- TypeScript (se instala como dependencia)

### **2. Instalación**

```bash
# Clona el repositorio
git clone <url-del-repo>
cd rest-api-ts

# Instala dependencias
npm install
```

### **3. Configuración**

Las variables de entorno ya están configuradas en [`.env`](.env):

```env
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:3000
API_URL=http://localhost:3000/api
```

### **4. Ejecución**

**Desarrollo (recomendado):**

```bash
# Ejecuta directamente con ts-node
npx ts-node server.ts

# O con scripts del package.json
npm run dev
```

**Producción:**

```bash
# Compila TypeScript a JavaScript
npm run build

# Ejecuta el código compilado
npm start
```

### **5. Verifica que funciona**

```bash
# Debería responder: {"success": true, "message": "Servidor OK"}
curl http://localhost:3000/health
```

---

## 🧪 Pruebas de Endpoints

### **Usando REST Client en VSCode**

Instala la extensión [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) y usa el archivo [`api.http`](api.http):

### **Ejemplos de uso:**

**✅ Verificar estado del servidor:**

```http
GET http://localhost:3000/health
```

**📋 Obtener todos los usuarios:**

```http
GET http://localhost:3000/api/users
```

**➕ Crear un nuevo usuario:**

```http
=======
│   ├── controllers/             # 🎮 Lógica de negocio
│   │   └── userController.ts
│   ├── models/                  # 📝 Modelos de datos
│   │   └── User.ts
│   ├── routes/                  # 🛣️ Definición de rutas
│   │   ├── userRoutes.ts
│   │   └── healthRoute.ts
│   └── middleware/              # 🛡️ Funciones intermedias
│       └── errorMiddleware.ts
├── .env                         # 🔒 Variables de entorno
├── .env.example                 # 📋 Plantilla de variables de entorno
├── .gitignore                   # 📝 Archivos a ignorar por Git
├── package.json                 # 📦 Dependencias y scripts
├── tsconfig.json                # ⚙️ Configuración de TypeScript
├── eslint.config.mts            # 🔍 Configuración de ESLint
├── api.http                     # 🧪 Tests de endpoints
├── README.md                    # 📖 Este archivo
└── FLUJO_API_EXPLICACION.md     # 📚 Documentación técnica detallada
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (v16 o superior)
- **npm** o **yarn**

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone <repository-url>
   cd rest-api-ts
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   ```bash
   cp .env.example .env
   # Edita .env con tus valores específicos
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 📋 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | 🔧 Inicia el servidor en modo desarrollo con ts-node |
| `npm run dev:watch` | 👀 Inicia el servidor con recarga automática |
| `npm run build` | 🏗️ Compila TypeScript a JavaScript en `/dist` |
| `npm run start` | ▶️ Ejecuta la versión compilada desde `/dist` |
| `npm run build:watch` | 👀 Compila en modo watch (recarga automática) |
| `npm run clean` | 🧹 Elimina la carpeta `/dist` |
| `npm run lint` | 🔍 Ejecuta ESLint para verificar el código |
| `npm run lint:fix` | 🔧 Ejecuta ESLint y corrige errores automáticamente |
| `npm run type-check` | ✅ Verifica tipos sin compilar |
| `npm run setup` | 🚀 Instala dependencias y compila el proyecto |

## 🌐 Endpoints de la API

### Health Check
```http
GET /health
```
Respuesta:
```json
{
  "success": true,
  "message": "Servidor OK"
}
```

### Usuarios

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/users` | Obtiene todos los usuarios |
| `GET` | `/api/users/:id` | Obtiene un usuario específico |
| `POST` | `/api/users` | Crea un nuevo usuario |
| `PUT` | `/api/users/:id` | Actualiza un usuario |
| `DELETE` | `/api/users/:id` | Elimina un usuario |

#### Ejemplo de Usuario:
```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "age": 25,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

## 🧪 Pruebas de Endpoints

El proyecto incluye un archivo `api.http` con ejemplos de peticiones que puedes ejecutar directamente desde VS Code con la extensión **REST Client**:

```http
### Verificar estado del servidor
GET http://localhost:3000/health

### Obtener todos los usuarios
GET http://localhost:3000/api/users

### Crear un nuevo usuario
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Ana Martínez",
  "email": "ana@email.com",
  "age": 27
}
```

<<<<<<< HEAD
**🔍 Obtener usuario específico:**

```http
GET http://localhost:3000/api/users/1
```

**✏️ Actualizar usuario:**

```http
PUT http://localhost:3000/api/users/1
Content-Type: application/json

{
  "name": "Juan Carlos Pérez",
  "age": 26
}
```

**🗑️ Eliminar usuario:**

```http
DELETE http://localhost:3000/api/users/1
```

---

## 🛡️ Manejo de Errores

El sistema implementa manejo de errores centralizado a través de [`src/middleware/errorMiddleware.ts`](src/middleware/errorMiddleware.ts):

- **`asyncHandler`**: Captura automática de errores en funciones async
- **`notFound`**: Manejo de rutas no encontradas (404)
- **`errorHandler`**: Formateo uniforme de respuestas de error

### **Formato de Respuestas**

**✅ Éxito:**

```json
{
  "success": true,
  "data": {...},
  "count": 3
}
```

**❌ Error:**

```json
{
  "success": false,
  "error": "Descripción del error",
  "stack": "..." // Solo en desarrollo
}
```

---

## 📊 Modelo de Datos

### **Interfaz IUser** (definida en [`src/models/User.ts`](src/models/User.ts)):

```typescript
interface IUser {
  id: number; // Autoincremental
  name: string; // Nombre del usuario
  email: string; // Email único
  age: number; // Edad del usuario
  createdAt: string; // Fecha de creación (ISO string)
}
```

### **Datos de Ejemplo**

```typescript
// Array en memoria - se resetea al reiniciar el servidor
[
  { id: 1, name: "Juan Pérez", email: "juan@email.com", age: 25 },
  { id: 2, name: "María García", email: "maria@email.com", age: 30 },
  { id: 3, name: "Carlos López", email: "carlos@email.com", age: 28 },
];
```

> ⚠️ **Importante**: Los datos se almacenan en memoria y se pierden al reiniciar el servidor.

---

## ⚙️ Configuración de Desarrollo

### **TypeScript ([`tsconfig.json`](tsconfig.json))**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### **ESLint ([`eslint.config.mts`](eslint.config.mts))**

- Configurado con TypeScript ESLint
- Soporte para JSON y CSS
- Configuración para Node.js y Browser

---

## 🔄 Scripts Disponibles

```bash
npm run dev          # Desarrollo con auto-reload
npm run build        # Compilar TypeScript
npm start            # Ejecutar versión compilada
npm run lint         # Verificar código con ESLint
npm run lint:fix     # Corregir errores de ESLint automáticamente
npm run type-check   # Verificar tipos sin compilar
```

---

## 🚀 Próximos Pasos para Expandir

### **🔐 Autenticación y Seguridad**

- **JWT**: Tokens de autenticación
- **bcrypt**: Hash de contraseñas
- **express-rate-limit**: Límite de peticiones
- **express-validator**: Validación avanzada

### **🗄️ Base de Datos**

- **PostgreSQL + Prisma**: Para SQL con tipado
- **MongoDB + Mongoose**: Para NoSQL
- **SQLite**: Para desarrollo rápido

### **🧪 Testing**

- **Jest**: Framework de testing
- **Supertest**: Testing de APIs HTTP
- **@types/jest**: Tipos para TypeScript

### **📋 Validación y Documentación**

- **Zod**: Validación de esquemas con TypeScript
- **Swagger/OpenAPI**: Documentación automática
- **class-validator**: Validación basada en decoradores

### **🚀 Optimización y Deploy**

- **Compression**: Compresión gzip
- **Winston**: Logging avanzado
- **PM2**: Process manager
- **Docker**: Containerización

---

## 💡 Conceptos Clave Implementados

### **🏗️ Arquitectura Modular**

- **Separación de responsabilidades**: Cada archivo tiene un propósito específico
- **Tipado estático**: TypeScript proporciona seguridad en tiempo de compilación
- **Middleware pattern**: Funciones reutilizables y configurables

### **🛡️ Manejo de Errores**

- **Centralizado**: Un solo lugar para manejar todos los errores
- **Consistente**: Formato uniforme de respuestas
- **Informativo**: Stack traces en desarrollo, mensajes limpios en producción

### **🌐 Diseño RESTful**

- **Recursos semánticos**: URLs que representan entidades
- **Métodos HTTP apropiados**: GET, POST, PUT, DELETE
- **Status codes estándar**: 200, 201, 400, 404, 500
- **Respuestas estructuradas**: Formato JSON consistente

---

## 📖 Documentación Completa

Para una explicación didáctica y visual completa del flujo de la API, consulta:

**👉 [`FLUJO_API_EXPLICACION.md`](FLUJO_API_EXPLICACION.md)**

Este archivo incluye:

- Diagramas visuales del flujo de peticiones
- Ejemplos paso a paso
- Explicación detallada de cada componente
- Casos de uso prácticos

---

## 🤝 Contribución
=======
## ⚙️ Variables de Entorno

Copia el archivo `.env.example` a `.env` y personaliza los valores:

```bash
cp .env.example .env
```

Variables disponibles:

```env
# Configuración básica
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:3000
API_URL=http://localhost:3000/api

# Configuración de base de datos (para uso futuro)
# DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Configuración JWT (para uso futuro)
# JWT_SECRET=your-secret-key-here
# JWT_EXPIRES_IN=7d
```

## 🏭 Producción

### 1. Compilar para producción:
```bash
npm run build
```

### 2. Ejecutar en producción:
```bash
npm start
```

### 3. Con PM2 (recomendado):
```bash
# Instalar PM2 globalmente
npm install -g pm2

# Compilar
npm run build

# Ejecutar con PM2
pm2 start dist/server.js --name "rest-api-ts"
```

## 🏭 Deployment

### Docker (Opcional)

Puedes crear un `Dockerfile` para containerizar la aplicación:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## 🛡️ Características de Seguridad

- **Helmet.js**: Headers de seguridad HTTP
- **CORS**: Configurado para origen específico
- **Rate Limiting**: Listo para implementar
- **Validación de datos**: Validación básica en controladores
- **Manejo de errores**: Middleware centralizado

## 📚 Arquitectura y Patrones

### Patrón MVC
- **Models**: Lógica de datos (User.ts)
- **Views**: Respuestas JSON (sin templates)
- **Controllers**: Lógica de negocio (userController.ts)

### Middleware Chain
1. **Seguridad** (Helmet)
2. **Logging** (Morgan)
3. **Parsing** (Express JSON/URL)
4. **CORS** (Cross-Origin Resource Sharing)
5. **Rutas** (API Routes)
6. **Error Handling** (404 + Error Handler)

## 🚀 Próximos Pasos

Para expandir esta API, considera agregar:

- [ ] Base de datos (PostgreSQL, MongoDB, etc.)
- [ ] Autenticación JWT
- [ ] Rate limiting
- [ ] Validación con Joi o Zod
- [ ] Tests unitarios con Jest
- [ ] Documentación con Swagger/OpenAPI
- [ ] Logger más robusto (Winston)
- [ ] Cacheo con Redis
- [ ] CI/CD con GitHub Actions

## 🤝 Contribuir
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

<<<<<<< HEAD
---

## 📄 Licencia
ISC © [Alejandro Gelormini](https://github.com/agelormini2024)

Este proyecto es un template educativo de código abierto. Siéntete libre de usarlo, modificarlo y distribuirlo.

---

_Template creado para acelerar el desarrollo de APIs RESTful_

=======
## 📖 Documentación Adicional

- [FLUJO_API_EXPLICACION.md](FLUJO_API_EXPLICACION.md) - Documentación técnica detallada del flujo de la API
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)

## 📄 Licencia

Este proyecto está bajo la Licencia ISC - ver el archivo LICENSE para detalles.

---

## ⚡ Quick Start

```bash
# Clonar e instalar
git clone <repository-url>
cd rest-api-ts
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

¡Tu API estará corriendo en `http://localhost:3000`! 🎉
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
