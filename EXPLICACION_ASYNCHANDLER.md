# ¿Cómo funciona asyncHandler?

## 1. ¿Qué es asyncHandler?

Es un "envoltorio" para las funciones async en Express. Su misión: atrapar cualquier error y enviarlo al middleware de errores, ¡sin que la app se caiga!

---

## 2. Flujo visual con emojis

```
👤 Cliente
   |
   ▼
🚦 Express recibe la petición
   |
   ▼
🛡️ asyncHandler llama a la función async
   |
   ▼
⚡ La función async puede lanzar un error (throw new Error)
   |
   ▼
🪂 asyncHandler atrapa el error y llama a next(error)
   |
   ▼
🚨 Express detecta el error y ejecuta errorHandler
   |
   ▼
📦 Cliente recibe respuesta JSON con el error
```

---

## 3. Código real y lo que pasa

```typescript
// Tu controlador:
export const getUser = asyncHandler(async (req, res) => {
  throw new Error("¡Algo salió mal!");
});
```

- No hay try/catch aquí.
- Si ocurre un error, asyncHandler lo atrapa y lo pasa a errorHandler.

---

## 4. ¿Cómo recibe los parámetros?

- Express llama a la función que devuelve asyncHandler, pasándole `req`, `res`, `next`.
- Esa función llama a la función original, pasándole esos mismos parámetros.
- Si ocurre un error, `.catch(next)` lo envía al middleware de errores.

---

## 5. Respuesta al cliente

```json
{
  "success": false,
  "error": "¡Algo salió mal!"
}
```

---

## 6. Resumen

- asyncHandler es como un “paracaídas” para tus funciones async.
- Si algo falla, atrapa y baja suavemente al middleware de errores.
- Así la app nunca se cae y el cliente siempre recibe una respuesta clara
