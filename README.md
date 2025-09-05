# 🚀 REST API Template con Node.js, Express y TypeScript

## 📚 Descripción

Este proyecto es una plantilla didáctica para construir APIs REST modernas usando **Node.js**, **Express** y **TypeScript**. Incluye una arquitectura modular, manejo centralizado de errores, pruebas de endpoints y buenas prácticas para escalar y mantener tu API.

## 🏗️ Estructura del Proyecto

```
rest-api-ts/
├── server.ts                    # 🚪 Punto de entrada principal
├── src/
│   ├── app.ts                   # 🧠 Configuración central de Express
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
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Ana Martínez",
  "email": "ana@email.com",
  "age": 27
}
```

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

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

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