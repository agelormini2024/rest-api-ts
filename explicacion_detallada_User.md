# Explicación Detallada y Didáctica de `User.ts`

Este documento te guiará paso a paso por el funcionamiento del archivo `User.ts`, explicando cada concepto de TypeScript y cada línea de código de manera didáctica.

---

## 📋 Índice
1. [¿Qué hace este archivo?](#qué-hace-este-archivo)
2. [Estructura general](#estructura-general)
3. [Interfaz IUser](#interfaz-iuser)
4. [Variables globales](#variables-globales)
5. [Clase User y métodos](#clase-user-y-métodos)
6. [Conceptos de TypeScript utilizados](#conceptos-de-typescript-utilizados)
7. [Patrones de diseño](#patrones-de-diseño)

---

## 🎯 ¿Qué hace este archivo?

Este archivo simula una **base de datos en memoria** para gestionar usuarios. Es como tener una mini base de datos que vive solo mientras el programa está corriendo. Implementa las operaciones básicas **CRUD**:

- **C**rear usuarios
- **R**eer usuarios (todos o por ID)
- **U**actualizar usuarios
- **D**eliminar usuarios

---

## 🏗️ Estructura General

```typescript
// 1. Definición de la interfaz (contrato)
export interface IUser { ... }

// 2. Datos en memoria (simulando una tabla de BD)
let users: IUser[] = [ ... ];
let nextId = 4;

// 3. Clase con métodos para operar los datos
export class User { ... }
```

---

## 📝 Interfaz `IUser`

```typescript
export interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
    createdAt: string;
}
```

### ¿Qué es una interfaz?
Una **interfaz** en TypeScript es como un "contrato" que define qué propiedades debe tener un objeto. Es como un molde o plantilla.

### Explicación campo por campo:
- `id: number` → El identificador único debe ser un número
- `name: string` → El nombre debe ser texto
- `email: string` → El email debe ser texto
- `age: number` → La edad debe ser un número
- `createdAt: string` → La fecha de creación como texto (formato ISO)

### ¿Por qué `export`?
La palabra `export` permite que otros archivos puedan importar y usar esta interfaz.

---

## 💾 Variables Globales

```typescript
let users: IUser[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@email.com', age: 25, createdAt: new Date().toISOString() },
    { id: 2, name: 'María García', email: 'maria@email.com', age: 30, createdAt: new Date().toISOString() },
    { id: 3, name: 'Carlos López', email: 'carlos@email.com', age: 28, createdAt: new Date().toISOString() },
];

let nextId = 4;
```

### Explicación detallada:

**`users: IUser[]`**
- `users` es una variable que contiene un array
- `IUser[]` significa "array de objetos que cumplen la interfaz IUser"
- Los corchetes `[]` indican que es un array
- Cada objeto del array debe tener todas las propiedades de `IUser`

**`nextId = 4`**
- Variable que llevará la cuenta del próximo ID a asignar
- Empieza en 4 porque ya tenemos usuarios con ID 1, 2 y 3

**`new Date().toISOString()`**
- `new Date()` crea una fecha actual
- `.toISOString()` la convierte a formato texto ISO (ej: "2025-09-08T10:30:00.000Z")

---

## 🏛️ Clase User y Métodos

```typescript
export class User {
    // métodos estáticos aquí...
}
```

### ¿Por qué métodos estáticos?
Los métodos **estáticos** se pueden llamar directamente en la clase, sin necesidad de crear una instancia:

```typescript
// ✅ Correcto - método estático
User.findAll()

// ❌ Incorrecto - no necesitamos hacer esto
const userInstance = new User()
userInstance.findAll()
```

---

### 🔍 Método `findAll()`

```typescript
static findAll(): IUser[] {
    return users;
}
```

**Explicación línea por línea:**
- `static` → método que pertenece a la clase, no a una instancia
- `findAll()` → nombre del método, sin parámetros
- `: IUser[]` → **tipo de retorno**: array de objetos IUser
- `return users` → devuelve el array completo de usuarios

**¿Cuándo se usa?** Para obtener todos los usuarios, como en un endpoint `GET /users`

---

### 🔍 Método `findById()`

```typescript
static findById(id: number): IUser | undefined {
    return users.find((u) => u.id === id);
}
```

**Explicación línea por línea:**
- `id: number` → **parámetro**: recibe un número que será el ID a buscar
- `: IUser | undefined` → **tipo de retorno**: puede devolver un usuario O undefined
- `users.find(...)` → busca en el array el primer elemento que cumpla la condición
- `(u) => u.id === id` → **función flecha**: por cada usuario `u`, verifica si su id coincide

**¿Por qué `| undefined`?**
Porque si no encuentra ningún usuario con ese ID, el método `find()` devuelve `undefined`.

**¿Cuándo se usa?** Para buscar un usuario específico, como en `GET /users/:id`

---

### ➕ Método `create()`

```typescript
static create(data: Omit<IUser, 'id' | 'createdAt'>): IUser {
    if (users.some((u) => u.email === data.email)) {
        throw new Error('El email ya está registrado');
    }
    const user: IUser = {
        ...data,
        id: nextId++,
        createdAt: new Date().toISOString(),
    };
    users.push(user);
    return user;
}
```

**Explicación paso a paso:**

**1. Parámetro `data`:**
```typescript
data: Omit<IUser, 'id' | 'createdAt'>
```
- `Omit<IUser, 'id' | 'createdAt'>` → toma la interfaz IUser pero **omite** id y createdAt
- Esto significa que `data` debe tener: `name`, `email`, `age` (pero NO id ni createdAt)

**2. Validación de email único:**
```typescript
if (users.some((u) => u.email === data.email)) {
    throw new Error('El email ya está registrado');
}
```
- `users.some(...)` → verifica si **al menos uno** cumple la condición
- Si encuentra un usuario con el mismo email, lanza un error

**3. Creación del nuevo usuario:**
```typescript
const user: IUser = {
    ...data,
    id: nextId++,
    createdAt: new Date().toISOString(),
};
```
- `...data` → **spread operator**: copia todas las propiedades de `data`
- `id: nextId++` → asigna el ID actual y luego incrementa la variable
- `createdAt: new Date().toISOString()` → genera la fecha actual

**4. Agregar al array y retornar:**
```typescript
users.push(user);
return user;
```

**¿Cuándo se usa?** Para crear usuarios nuevos, como en `POST /users`

---

### ✏️ Método `update()`

```typescript
static update(id: number, data: Partial<Omit<IUser, 'id' | 'createdAt'>>): IUser | undefined {
    const user = users.find((u) => u.id === id);
    if (!user) return undefined;
    Object.assign(user, data);
    return user;
}
```

**Explicación paso a paso:**

**1. Parámetros:**
- `id: number` → ID del usuario a actualizar
- `data: Partial<Omit<IUser, 'id' | 'createdAt'>>` → datos para actualizar

**¿Qué significa `Partial`?**
`Partial` hace que todas las propiedades sean **opcionales**:
```typescript
// Sin Partial: todas obligatorias
{ name: string, email: string, age: number }

// Con Partial: todas opcionales
{ name?: string, email?: string, age?: number }
```

**2. Buscar el usuario:**
```typescript
const user = users.find((u) => u.id === id);
if (!user) return undefined;
```
- Si no encuentra el usuario, devuelve `undefined`

**3. Actualizar propiedades:**
```typescript
Object.assign(user, data);
```
- `Object.assign()` copia las propiedades de `data` al objeto `user`
- Solo actualiza las propiedades que vienen en `data`

**¿Cuándo se usa?** Para actualizar usuarios, como en `PUT /users/:id`

---

### 🗑️ Método `delete()`

```typescript
static delete(id: number): boolean {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
}
```

**Explicación paso a paso:**

**1. Buscar el índice:**
```typescript
const index = users.findIndex((u) => u.id === id);
```
- `findIndex()` devuelve la posición del elemento en el array
- Si no lo encuentra, devuelve `-1`

**2. Verificar si existe:**
```typescript
if (index === -1) return false;
```
- Si el índice es -1, significa que no encontró el usuario

**3. Eliminar del array:**
```typescript
users.splice(index, 1);
```
- `splice(index, 1)` elimina 1 elemento en la posición `index`

**4. Confirmar eliminación:**
```typescript
return true;
```

**¿Cuándo se usa?** Para eliminar usuarios, como en `DELETE /users/:id`

---

## 🧩 Conceptos de TypeScript Utilizados

### 1. **Interfaces**
Definen la estructura de los objetos
```typescript
interface IUser { ... }
```

### 2. **Tipos de Unión**
Permiten múltiples tipos posibles
```typescript
IUser | undefined  // puede ser IUser O undefined
```

### 3. **Utility Types**

**`Omit<T, K>`** - Excluye propiedades
```typescript
Omit<IUser, 'id' | 'createdAt'>  // IUser sin id ni createdAt
```

**`Partial<T>`** - Hace propiedades opcionales
```typescript
Partial<IUser>  // Todas las propiedades de IUser son opcionales
```

### 4. **Anotaciones de Tipo**
```typescript
function metodo(parametro: tipo): tipoRetorno { ... }
```

### 5. **Métodos Estáticos**
```typescript
static metodo() { ... }  // Se llama: Clase.metodo()
```

---

## 🎨 Patrones de Diseño

### 1. **Repository Pattern**
La clase `User` actúa como un repositorio que encapsula el acceso a los datos.

### 2. **Static Methods Pattern**
Todos los métodos son estáticos porque no necesitamos estado de instancia.

### 3. **Error Handling**
Uso de `throw new Error()` para manejar casos de error (email duplicado).

### 4. **Type Safety**
TypeScript garantiza que los datos tengan la estructura correcta.

---

## 🎯 Resumen de Flujos

### Crear Usuario:
1. Recibe datos sin `id` ni `createdAt`
2. Valida que el email no exista
3. Genera `id` y `createdAt` automáticamente
4. Agrega al array
5. Retorna el usuario creado

### Buscar Usuario:
1. Recibe un `id`
2. Busca en el array
3. Retorna el usuario o `undefined`

### Actualizar Usuario:
1. Busca el usuario por `id`
2. Si existe, actualiza solo las propiedades enviadas
3. Retorna el usuario actualizado o `undefined`

### Eliminar Usuario:
1. Busca el índice del usuario
2. Si existe, lo elimina del array
3. Retorna `true` (éxito) o `false` (no encontrado)

---


