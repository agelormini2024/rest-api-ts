# 🚀 REST API Template con Node.js, Express y TypeScript

## 📚 Descripción

Esta es una plantilla moderna para construir APIs REST usando **Node.js**, **Express** y **TypeScript**. Incluye una arquitectura modular, manejo centralizado de errores, validación de tipos, y buenas prácticas para desarrollo escalable.

---

## 🏗️ Estructura del Proyecto

```
rest-api-ts/
├── server.ts                    # 🚪 Punto de entrada principal
├── src/
│   ├── app.ts                   # 🧠 Configuración central de Express
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
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Ana Martínez",
  "email": "ana@email.com",
  "age": 27
}
```

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

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia
ISC © [Alejandro Gelormini](https://github.com/agelormini2024)

Este proyecto es un template educativo de código abierto. Siéntete libre de usarlo, modificarlo y distribuirlo.

---

_Template creado para acelerar el desarrollo de APIs RESTful_

