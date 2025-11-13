# 📚 Documentación: Flujo Completo de la REST API

## 🎯 Introducción

<<<<<<< HEAD
Esta documentación explica de manera didáctica cómo funciona el flujo completo de una REST API construida con Node.js, Express y **TypeScript**. Está diseñada para servir como template para futuras APIs con tipado estático y mejores prácticas de desarrollo.
=======
Esta documentación explica de manera didáctica cómo funciona el flujo completo de una REST API construida con Node.js, Express y ES6 modules. Está diseñada para servir como template para futuras APIs.
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

---

## 🏗️ Arquitectura General

```
<<<<<<< HEAD
rest-api-ts/
├── server.ts              # 🚪 Punto de entrada principal
├── src/
│   ├── app.ts             # 🧠 Configuración central de Express
│   ├── controllers/       # 🎮 Lógica de negocio
│   │   └── userController.ts
│   ├── models/            # 📝 Modelos de datos
│   │   └── User.ts
│   ├── routes/            # 🛣️ Definición de rutas
│   │   ├── userRoutes.ts
│   │   └── healthRoute.ts
│   ├── middleware/        # 🛡️ Funciones intermedias
│   │   └── errorMiddleware.ts
├── .env                   # 🔒 Variables de entorno
├── package.json           # 📦 Dependencias y scripts
├── tsconfig.json          # ⚙️ Configuración de TypeScript
├── eslint.config.mts      # 🔍 Configuración de ESLint
=======
my-api/
├── server.js              # 🚪 Punto de entrada principal
├── src/
│   ├── app.js             # 🧠 Configuración central de Express
│   ├── controllers/       # 🎮 Lógica de negocio
│   │   └── userController.js
│   ├── models/            # 📝 Modelos de datos
│   │   └── User.js
│   ├── routes/            # 🛣️ Definición de rutas
│   │   └── userRoutes.js
│   ├── middleware/        # 🛡️ Funciones intermedias
│   │   └── errorMiddleware.js
│   └── config/            # ⚙️ Configuraciones
├── .env                   # 🔒 Variables de entorno
├── package.json           # 📦 Dependencias y scripts
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
└── api.http              # 🧪 Tests de endpoints
```

---

## 🚀 Flujo Completo de una Petición HTTP

<<<<<<< HEAD
### 1. **Punto de Entrada: `server.ts`**

```
🌐 Cliente hace petición → 📡 Puerto 3000 → server.ts
```

**Responsabilidades:**

=======
### 1. **Punto de Entrada: `server.js`**

```
🌐 Cliente hace petición → 📡 Puerto 3000 → server.js
```

**Responsabilidades:**
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- Escucha en el puerto configurado (3000 por defecto)
- Carga las variables de entorno desde `.env`
- Importa y ejecuta la configuración de la app
- Maneja el cierre graceful del servidor

<<<<<<< HEAD
```typescript
// server.ts - El portero principal
import app from "./src/app";
import dotenv from "dotenv";
=======
```javascript
// server.js - El portero principal
import app from './src/app.js';
import dotenv from 'dotenv';
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
});
```

---

<<<<<<< HEAD
### 2. **Configuración Central: `src/app.ts`**
=======
### 2. **Configuración Central: `src/app.js`**
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

```
📡 Petición llega → 🔧 Middleware Stack → 🛣️ Rutas
```

**Stack de Middleware (ORDEN CRÍTICO):**

<<<<<<< HEAD
```typescript
// app.ts - El cerebro que procesa todo
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

=======
```javascript
// app.js - El cerebro que procesa todo
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
const app = express();

// 1️⃣ SEGURIDAD
app.use(helmet()); // Añade headers de seguridad HTTP

// 2️⃣ LOGGING
<<<<<<< HEAD
app.use(morgan("combined")); // Registra cada petición HTTP

// 3️⃣ PARSING
app.use(express.json({ limit: "10mb" })); // Convierte JSON → Objeto JS
app.use(express.urlencoded({ extended: true })); // Parse form data

// 4️⃣ CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

// 5️⃣ RUTAS
app.use("/api/users", userRoutes);
app.use("/health", healthRoute);
=======
app.use(morgan('combined')); // Registra cada petición HTTP

// 3️⃣ PARSING
app.use(express.json({ limit: '10mb' })); // Convierte JSON → Objeto JS
app.use(express.urlencoded({ extended: true })); // Parse form data

// 4️⃣ CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// 5️⃣ RUTAS
app.use('/api/users', userRoutes);
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

// 6️⃣ ERROR HANDLERS (SIEMPRE AL FINAL)
app.use(notFound);
app.use(errorHandler);
```

**Flujo de Procesamiento:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```
Petición → Helmet → Morgan → JSON Parser → CORS → Rutas → Error Handler
```

---

## 🔄 Ejemplos Prácticos de Flujo

### **Ejemplo 1: GET /api/users**

#### **Petición:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```http
GET http://localhost:3000/api/users
```

#### **Flujo Paso a Paso:**

**1. Enrutamiento:**
<<<<<<< HEAD

```typescript
// app.ts - Línea que dirige el tráfico
app.use("/api/users", userRoutes);
```

**2. Identificación de Ruta:**

```typescript
// userRoutes.ts - Encuentra la función exacta
router.route("/").get(getUsers); // ← Aquí coincide GET /api/users
```

**3. Ejecución del Controlador:**

```typescript
// userController.ts - Lógica de negocio
import { Request, Response } from "express";
import { User } from "../models/User";
import { asyncHandler } from "../middleware/errorMiddleware";

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = User.findAll(); // ← Llama al modelo

  res.json({
    success: true,
    count: users.length,
    data: users,
=======
```javascript
// app.js - Línea que dirige el tráfico
app.use('/api/users', userRoutes);
```

**2. Identificación de Ruta:**
```javascript
// userRoutes.js - Encuentra la función exacta
router.route('/')
  .get(getUsers)  // ← Aquí coincide GET /api/users
```

**3. Ejecución del Controlador:**
```javascript
// userController.js - Lógica de negocio
export const getUsers = asyncHandler(async (req, res) => {
  const users = User.findAll(); // ← Llama al modelo
  
  res.json({
    success: true,
    count: users.length,
    data: users
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
  });
});
```

**4. Procesamiento en el Modelo:**
<<<<<<< HEAD

```typescript
// User.ts - Acceso a datos
export class User {
  static findAll(): IUser[] {
    return users; // Devuelve el array de usuarios en memoria
  }
=======
```javascript
// User.js - Acceso a datos
static findAll() {
  return users; // Devuelve el array de usuarios en memoria
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
}
```

**5. Respuesta Final:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```json
{
  "success": true,
  "count": 3,
  "data": [
    { "id": 1, "name": "Juan Pérez", "email": "juan@email.com", "age": 25 },
    { "id": 2, "name": "María García", "email": "maria@email.com", "age": 30 },
    { "id": 3, "name": "Carlos López", "email": "carlos@email.com", "age": 28 }
  ]
}
```

---

### **Ejemplo 2: POST /api/users (Crear Usuario)**

#### **Petición:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```http
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Ana Martínez",
  "email": "ana@email.com",
  "age": 27
}
```

#### **Flujo Detallado:**

```
📨 POST /api/users con JSON body
    ↓
🔧 express.json() - Convierte el JSON en req.body
    ↓
🛣️ userRoutes.js - router.route('/').post(createUser)
    ↓
<<<<<<< HEAD
🎮 userController.ts - createUser()
    ↓
🔍 Validación de entrada (name, email, age requeridos)
    ↓
📝 User.ts - User.create(userData)
=======
🎮 userController.js - createUser()
    ↓ 
🔍 Validación de entrada (name, email, age requeridos)
    ↓
📝 User.js - User.create(userData)
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
    ↓
✅ Validación del modelo + verificación email único
    ↓
💾 Almacenamiento en array users[]
    ↓
📤 Respuesta JSON con status 201
```

#### **En el Controlador:**
<<<<<<< HEAD

```typescript
import { Request, Response } from "express";

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, age } = req.body; // ← Datos parseados por express.json()

  // Validación de entrada
  if (!name || !email || !age) {
    res.status(400);
    throw new Error("Por favor proporciona name, email y age");
=======
```javascript
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, age } = req.body; // ← Datos parseados por express.json()
  
  // Validación de entrada
  if (!name || !email || !age) {
    res.status(400);
    throw new Error('Por favor proporciona name, email y age');
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
  }

  const user = User.create({ name, email, age }); // ← Delegación al modelo

  res.status(201).json({
    success: true,
<<<<<<< HEAD
    data: user,
=======
    data: user
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
  });
});
```

#### **En el Modelo:**
<<<<<<< HEAD

```typescript
export class User {
  static create(data: Omit<IUser, "id" | "createdAt">): IUser {
    if (users.some((u) => u.email === data.email)) {
      throw new Error("El email ya está registrado");
    }

    const user: IUser = {
      ...data,
      id: nextId++,
      createdAt: new Date().toISOString(),
    };

    users.push(user); // ← Persistencia en memoria
    return user;
  }
=======
```javascript
static create(userData) {
  const user = new User(userData);
  const errors = user.validate(); // ← Validación interna
  
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }

  // Verificación de email único
  if (users.some(u => u.email === user.email)) {
    throw new Error('El email ya está registrado');
  }

  users.push(user); // ← Persistencia en memoria
  return user;
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
}
```

---

## 🛡️ Manejo de Errores

### **Flujo de Error:**

```
❌ Error en cualquier punto del flujo
    ↓
🛡️ asyncHandler() - Captura automática de errores async
    ↓
🚨 errorHandler() - Middleware de manejo de errores
    ↓
📤 Respuesta de error estandarizada
```

### **Tipos de Errores Manejados (PostgreSQL):**

1. **Errores de Conexión (503):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Base de datos no disponible
{
  "success": false,
  "error": "Error de conexión a la base de datos"
}
```

2. **Errores de Restricción Única - PostgreSQL 23505 (400):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Email duplicado
{
  "success": false,
  "error": "El email ya existe. Debe ser único.",
  "code": "23505",  // Solo en desarrollo
  "detail": "Key (email)=(test@email.com) already exists."
}
```

3. **Errores de Campo Obligatorio - PostgreSQL 23502 (400):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Campo NOT NULL
{
  "success": false,
  "error": "El campo 'name' es obligatorio"
}
```

4. **Errores de Clave Foránea - PostgreSQL 23503 (400):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Referencia inexistente
{
  "success": false,
  "error": "Referencia a un recurso que no existe"
}
```

5. **Errores de Validación - PostgreSQL 23514 (400):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Restricción check
{
  "success": false,
  "error": "Los datos no cumplen con las restricciones de validación"
}
```

6. **Errores de ID Inválido (400):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: UUID/Integer malformado
{
  "success": false,
  "error": "ID proporcionado no es válido"
}
```

7. **Errores de Tipo de Dato - PostgreSQL 22P02 (400):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Formato incorrecto
{
  "success": false,
  "error": "Formato de datos inválido"
}
```

8. **Errores de Recurso No Encontrado (404):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Usuario con ID inexistente
{
  "success": false,
  "error": "Usuario no encontrado"
}
```

9. **Errores de Ruta No Encontrada (404):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: Endpoint inexistente
{
  "success": false,
  "error": "Ruta no encontrada - /api/productos"
}
```

10. **Errores Internos del Servidor (500):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```javascript
// Error: SQL syntax o tabla inexistente
{
  "success": false,
  "error": "Error interno del servidor - Consulta SQL inválida"
}
```

### **Códigos de Error PostgreSQL Principales:**

| Código         | Descripción                     | Status HTTP | Ejemplo                   |
<<<<<<< HEAD
| -------------- | ------------------------------- | ----------- | ------------------------- |
=======
|----------------|---------------------------------|-------------|---------------------------|
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
| `23505`        | Violación restricción única     | 400         | Email duplicado           |
| `23502`        | Violación NOT NULL              | 400         | Campo obligatorio         |
| `23503`        | Violación clave foránea         | 400         | ID referenciado no existe |
| `23514`        | Violación restricción check     | 400         | Edad negativa             |
| `42601`        | Error sintaxis SQL              | 500         | Query malformado          |
| `42P01`        | Tabla no existe                 | 500         | Esquema incorrecto        |
| `42703`        | Columna no existe               | 500         | Campo inexistente         |
| `22P02`        | Tipo de dato inválido           | 400         | String en campo numérico  |
| `ECONNREFUSED` | Conexión rechazada              | 503         | BD no disponible          |
| `P2025`        | Registro no encontrado (Prisma) | 404         | Usuario inexistente       |

### **asyncHandler Explicado:**
<<<<<<< HEAD

```typescript
// Envuelve funciones async para capturar errores automáticamente
import { Request, Response, NextFunction } from "express";

export const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// Sin asyncHandler tendrías que hacer esto en cada función:
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
=======
```javascript
// Envuelve funciones async para capturar errores automáticamente
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Sin asyncHandler tendrías que hacer esto en cada función:
export const getUsers = async (req, res, next) => {
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
  try {
    const users = User.findAll();
    res.json({ success: true, data: users });
  } catch (error) {
    next(error); // ← Manualmente pasar errores
  }
};
```

---

## 📊 Estructura de Datos

### **Modelo User:**

<<<<<<< HEAD
```typescript
// Interfaz que define la estructura de un usuario
export interface IUser {
  id: number; // Autoincremental
  name: string; // String, min 2 caracteres
  email: string; // String, formato email válido
  age: number; // Number, entre 0-120
  createdAt: string; // ISO String, auto-generado
=======
```javascript
// Estructura de un usuario
{
  id: 1,                                    // Autoincremental
  name: "Juan Pérez",                       // String, min 2 caracteres
  email: "juan@email.com",                  // String, formato email válido
  age: 25,                                  // Number, entre 0-120
  createdAt: "2025-09-02T10:30:00.000Z"    // ISO String, auto-generado
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
}
```

### **Base de Datos Simulada:**

<<<<<<< HEAD
```typescript
// Array en memoria que simula una base de datos
let users: IUser[] = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@email.com",
    age: 25,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "María García",
    email: "maria@email.com",
    age: 30,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Carlos López",
    email: "carlos@email.com",
    age: 28,
    createdAt: new Date().toISOString(),
  },
=======
```javascript
// Array en memoria que simula una base de datos
let users = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com', age: 25 },
  { id: 2, name: 'María García', email: 'maria@email.com', age: 30 },
  { id: 3, name: 'Carlos López', email: 'carlos@email.com', age: 28 }
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
];

let nextId = 4; // Contador para IDs únicos
```

**⚠️ Importante:** Los datos se resetean en cada reinicio del servidor.

---

## 🛣️ Endpoints Disponibles

<<<<<<< HEAD
| Método   | Endpoint         | Descripción                | Body Requerido          |
| -------- | ---------------- | -------------------------- | ----------------------- |
| `GET`    | `/health`        | Estado del servidor        | -                       |
| `GET`    | `/api/users`     | Obtener todos los usuarios | -                       |
| `GET`    | `/api/users/:id` | Obtener usuario específico | -                       |
| `POST`   | `/api/users`     | Crear nuevo usuario        | `{name, email, age}`    |
| `PUT`    | `/api/users/:id` | Actualizar usuario         | `{name?, email?, age?}` |
| `DELETE` | `/api/users/:id` | Eliminar usuario           | -                       |
=======
| Método | Endpoint       | Descripción               | Body Requerido          |
|--------|----------------|---------------------------|-------------------------|
|`GET`   |`/health`       | Estado del servidor       | -                       |
|`GET`   |`/api/users`    | Obtener todos los usuarios| -                       |
|`GET`   |`/api/users/:id`| Obtener usuario específico| -                       |
|`POST`  |`/api/users`    | Crear nuevo usuario       | `{name, email, age}`    |
|`PUT`   |`/api/users/:id`| Actualizar usuario        | `{name?, email?, age?}` |
|`DELETE`|`/api/users/:id`| Eliminar usuario          | -                       |
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

### **Formato de Respuesta Estándar:**

**Éxito:**
<<<<<<< HEAD

```typescript
=======
```javascript
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
{
  "success": true,
  "data": {...},        // Para respuestas con datos
  "count": 5,           // Para listas (opcional)
  "message": "..."      // Para acciones sin datos (opcional)
}
```

**Error:**
<<<<<<< HEAD

```typescript
=======
```javascript
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
{
  "success": false,
  "error": "Descripción del error",
  "stack": "..."        // Solo en desarrollo
}
```

---

## ⚙️ Configuración

### **Variables de Entorno (.env):**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
```env
NODE_ENV=development          # Entorno de ejecución
PORT=3000                    # Puerto del servidor
FRONTEND_URL=http://localhost:3000  # URL del frontend para CORS
API_URL=http://localhost:3000/api   # URL base de la API
```

### **Scripts de NPM:**
<<<<<<< HEAD

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node server.ts", // Desarrollo con auto-reload
    "build": "tsc", // Compilar TypeScript
    "start": "node dist/server.js", // Producción
    "lint": "eslint src/**/*.ts", // Verificar código
    "type-check": "tsc --noEmit" // Verificar tipos
=======
```json
{
  "scripts": {
    "start": "node server.js",     // Producción
    "dev": "nodemon server.js"     // Desarrollo con auto-reload
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
  }
}
```

---

## 🔄 Diagrama Visual del Flujo Completo

```
🌐 Cliente (Postman, Browser, App)
    ↓ (HTTP Request)
<<<<<<< HEAD
📡 server.ts (Puerto 3000)
    ↓ (Carga configuración)
🔧 app.ts (Middleware Stack)
=======
📡 server.js (Puerto 3000)
    ↓ (Carga configuración)
🔧 app.js (Middleware Stack)
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
    ├── helmet() .................... Seguridad HTTP
    ├── morgan() .................... Logging de requests
    ├── express.json() .............. Parsing del body
    ├── cors() ...................... Control de CORS
    └── userRoutes .................. Enrutamiento
         ↓ (Identifica ruta específica)
<<<<<<< HEAD
🛣️ userRoutes.ts
=======
🛣️ userRoutes.js
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
    ├── GET / → getUsers ............ Listar todos
    ├── POST / → createUser ......... Crear nuevo
    ├── GET /:id → getUserById ...... Obtener uno
    ├── PUT /:id → updateUser ....... Actualizar
    └── DELETE /:id → deleteUser .... Eliminar
         ↓ (Ejecuta lógica de negocio)
<<<<<<< HEAD
🎮 userController.ts
=======
🎮 userController.js
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
    ├── Validación de entrada ....... Campos requeridos
    ├── Llamada al modelo ........... Operaciones CRUD
    └── Formateo de respuesta ....... Estructura estándar
         ↓ (Acceso a datos)
<<<<<<< HEAD
📝 User.ts (Modelo de datos)
=======
📝 User.js (Modelo de datos)
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
    ├── Operaciones CRUD ............ create, read, update, delete
    ├── Validación de datos ......... email, age, name
    └── Simulación de BD ............ Array en memoria
         ↓ (Resultado procesado)
📤 Respuesta JSON al cliente
```

---

## 🧪 Testing de la API

### **Usando el archivo api.http:**

```http
### Verificar estado del servidor
GET http://localhost:3000/health

### Obtener todos los usuarios
GET http://localhost:3000/api/users

### Crear un nuevo usuario
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Ana Martínez",
  "email": "ana@email.com",
  "age": 27
}

### Obtener usuario específico
GET http://localhost:3000/api/users/1

### Actualizar usuario
PUT http://localhost:3000/api/users/1
Content-Type: application/json

{
  "name": "Juan Carlos Pérez",
  "age": 26
}

### Eliminar usuario
DELETE http://localhost:3000/api/users/1
```

---

## 🚀 Comandos de Inicialización

### **Setup inicial del proyecto:**

```bash
# 1. Crear directorio e inicializar
<<<<<<< HEAD
mkdir my-express-api-ts && cd my-express-api-ts
=======
mkdir my-express-api && cd my-express-api
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
npm init -y

# 2. Instalar dependencias
npm install express cors helmet morgan dotenv
<<<<<<< HEAD
npm install --save-dev typescript ts-node @types/node @types/express @types/cors @types/helmet @types/morgan nodemon

# 3. Crear estructura de carpetas
mkdir -p src/{controllers,models,routes,middleware}

# 4. Crear archivos principales
touch server.ts src/app.ts .env .gitignore tsconfig.json
touch src/controllers/userController.ts
touch src/models/User.ts
touch src/routes/userRoutes.ts src/routes/healthRoute.ts
touch src/middleware/errorMiddleware.ts

# 5. Configurar TypeScript
echo '{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["server.ts", "src/**/*.ts"]
}' > tsconfig.json

# 6. Ejecutar en desarrollo
=======
npm install --save-dev nodemon

# 3. Crear estructura de carpetas
mkdir -p src/{controllers,models,routes,middleware,config}

# 4. Crear archivos principales
touch server.js src/app.js .env .gitignore
touch src/controllers/userController.js
touch src/models/User.js
touch src/routes/userRoutes.js
touch src/middleware/errorMiddleware.js

# 5. Ejecutar en desarrollo
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
npm run dev
```

---

## 🔄 Próximos Pasos para Expandir

### **1. Base de Datos Real:**
<<<<<<< HEAD

- **PostgreSQL + Prisma:** Para SQL (✅ **Manejo de errores ya implementado**)
- **MongoDB + Mongoose:** Para NoSQL
- **SQLite:** Para prototipado rápido

### **2. Autenticación y Autorización:**

=======
- **PostgreSQL + Prisma:** Para SQL (✅ **Manejo de errores ya implementado**)
- **MongoDB + Mongoose:** Para NoSQL  
- **SQLite:** Para prototipado rápido

### **2. Autenticación y Autorización:**
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **JWT (JSON Web Tokens):** Para autenticación stateless
- **bcrypt:** Para hash de contraseñas
- **Middleware de autenticación:** Proteger rutas

### **3. Validación Avanzada:**
<<<<<<< HEAD

- **Joi:** Validación de esquemas robusta
- **express-validator:** Middleware de validación
- **Zod:** Validación con TypeScript (recomendado)

### **4. Testing:**

- **Jest:** Framework de testing
- **Supertest:** Testing de APIs HTTP
- **@types/jest:** Tipos para TypeScript
- **Testing de integración y unitario**

### **5. Documentación Automática:**

=======
- **Joi:** Validación de esquemas robusta
- **express-validator:** Middleware de validación
- **Zod:** Validación con TypeScript

### **4. Testing:**
- **Jest:** Framework de testing
- **Supertest:** Testing de APIs HTTP
- **Testing de integración y unitario**

### **5. Documentación Automática:**
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **Swagger/OpenAPI:** Documentación interactiva
- **Postman Collections:** Colecciones exportables

### **6. Optimización y Monitoreo:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **Compression:** Compresión gzip
- **Rate Limiting:** Límites de peticiones
- **Health Checks:** Monitoreo del estado
- **Logging avanzado:** Winston, Pino

### **7. Deployment:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **Docker:** Containerización
- **PM2:** Process manager
- **Environment configs:** Múltiples entornos

---

## 💡 Conceptos Clave Aprendidos

### **1. Separation of Concerns (Separación de Responsabilidades):**
<<<<<<< HEAD

- **server.ts:** Solo inicialización del servidor
- **app.ts:** Solo configuración de Express
=======
- **server.js:** Solo inicialización del servidor
- **app.js:** Solo configuración de Express
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **Controllers:** Solo lógica de negocio
- **Models:** Solo acceso y validación de datos
- **Routes:** Solo definición de endpoints

### **2. Middleware Pattern:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **Secuencial:** Se ejecutan en orden
- **Reutilizable:** Un middleware puede usarse en múltiples rutas
- **Modular:** Cada middleware tiene una responsabilidad específica

### **3. Error Handling Centralizado:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **asyncHandler:** Captura automática de errores async
- **errorMiddleware:** Manejo uniforme de errores
- **Respuestas consistentes:** Mismo formato para todos los errores

### **4. RESTful Design:**
<<<<<<< HEAD

=======
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
- **Recursos:** `/api/users` representa la colección de usuarios
- **Métodos HTTP:** GET, POST, PUT, DELETE para CRUD
- **Status Codes:** 200, 201, 400, 404, 500 apropiados
- **Respuestas consistentes:** Mismo formato de respuesta

<<<<<<< HEAD
### **5. TypeScript Benefits:**

- **Tipado estático:** Detección de errores en tiempo de compilación
- **IntelliSense:** Autocompletado mejorado en el IDE
- **Interfaces:** Contratos claros para estructuras de datos
- **Refactoring seguro:** Cambios con confianza
=======
### **5. ES6 Modules:**
- **import/export:** Sintaxis moderna de módulos
- **"type": "module":** Habilitación en package.json
- **Named exports:** Múltiples exports por archivo
- **Default exports:** Un export principal por archivo
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

---

## 🎯 Conclusión

<<<<<<< HEAD
Esta REST API template proporciona una base sólida y escalable para construir APIs modernas con Node.js, Express y TypeScript. La arquitectura modular permite:
=======
Esta REST API template proporciona una base sólida y escalable para construir APIs modernas con Node.js y Express. La arquitectura modular permite:
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a

- **Fácil mantenimiento:** Código organizado por responsabilidades
- **Escalabilidad:** Estructura que soporta crecimiento
- **Reutilización:** Template aplicable a diferentes proyectos
- **Mejores prácticas:** Implementa patrones estándar de la industria
<<<<<<< HEAD
- **Seguridad de tipos:** TypeScript previene errores en tiempo de compilación


---

_Documentación actualizada para TypeScript el 5 de septiembre de 2025_  
_Template de REST API con Node.js, Express y TypeScript_
=======

**¡Ahora tienes una API completamente funcional y bien documentada para usar como base en tus futuros proyectos!** 🚀

---

*Documentación creada el 2 de septiembre de 2025*  
*Template de REST API con Node.js, Express y ES6*
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
