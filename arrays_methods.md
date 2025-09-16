# Métodos de Arrays en JavaScript/TypeScript (Machete Express)


## 1. `find`
- **¿Para qué sirve?**  
  Busca el primer elemento que cumpla una condición.
- **Ejemplo:**  
  ```ts
  const user = users.find(u => u.id === 1);
  ```
- **Retorna:** El elemento encontrado o `undefined`.
- **¿Muta el array original?** No

---


## 2. `some`
- **¿Para qué sirve?**  
  Verifica si al menos un elemento cumple una condición.
- **Ejemplo:**  
  ```ts
  const existe = users.some(u => u.email === 'test@email.com');
  ```
- **Retorna:** `true` o `false`.
- **¿Muta el array original?** No

---


## 3. `push`
- **¿Para qué sirve?**  
  Agrega uno o más elementos al final del array.
- **Ejemplo:**  
  ```ts
  users.push({ id: 4, name: 'Ana', ... });
  ```
- **Retorna:** La nueva longitud del array.
- **¿Muta el array original?** Sí

---


## 4. `findIndex`
- **¿Para qué sirve?**  
  Busca el índice del primer elemento que cumpla una condición.
- **Ejemplo:**  
  ```ts
  const idx = users.findIndex(u => u.id === 2);
  ```
- **Retorna:** El índice encontrado o `-1`.
- **¿Muta el array original?** No

---


## 5. `splice`
- **¿Para qué sirve?**  
  Elimina, reemplaza o agrega elementos en el array.
- **Ejemplo:**  
  ```ts
  users.splice(idx, 1); // Elimina 1 elemento en la posición idx
  ```
- **Retorna:** Un array con los elementos eliminados.
- **¿Muta el array original?** Sí

---


## 6. `Object.assign`
- **¿Para qué sirve?**  
  Copia propiedades de uno o más objetos a otro.
- **Ejemplo:**  
  ```ts
  Object.assign(user, data);
  ```
- **Retorna:** El objeto destino modificado.
- **¿Muta el array original?** No, pero muta el objeto destino si es parte del array.

---

## Métodos adicionales útiles


### `map`
- **¿Para qué sirve?**  
  Crea un nuevo array transformando cada elemento.
- **Ejemplo:**  
  ```ts
  const nombres = users.map(u => u.name);
  ```
- **¿Muta el array original?** No


### `filter`
- **¿Para qué sirve?**  
  Crea un nuevo array con los elementos que cumplen una condición.
- **Ejemplo:**  
  ```ts
  const mayores = users.filter(u => u.age > 25);
  ```
- **¿Muta el array original?** No


### `forEach`
- **¿Para qué sirve?**  
  Ejecuta una función por cada elemento (no retorna nada).
- **Ejemplo:**  
  ```ts
  users.forEach(u => console.log(u.email));
  ```
- **¿Muta el array original?** No (pero puedes mutar elementos dentro del callback)


### `reduce`
- **¿Para qué sirve?**  
  Reduce el array a un solo valor usando una función acumuladora.
- **Ejemplo:**  
  ```ts
  const totalEdad = users.reduce((acc, u) => acc + u.age, 0);
  ```
- **¿Muta el array original?** No

---


## Resumen visual

| Método        | ¿Para qué sirve?                  | ¿Qué retorna?         | ¿Muta el array original? |
|---------------|-----------------------------------|-----------------------|--------------------------|
| find          | Buscar un elemento                | Elemento o undefined  | No                       |
| some          | ¿Existe algún elemento?           | true/false            | No                       |
| push          | Agregar al final                  | Nueva longitud        | Sí                       |
| findIndex     | Buscar índice                     | Índice o -1           | No                       |
| splice        | Eliminar/reemplazar/agregar       | Array de eliminados   | Sí                       |
| map           | Transformar elementos             | Nuevo array           | No                       |
| filter        | Filtrar elementos                 | Nuevo array           | No                       |
| forEach       | Recorrer elementos                | Nada (undefined)      | No*                      |
| reduce        | Acumular en un solo valor         | Valor acumulado       | No                       |
| Object.assign | Copiar propiedades a un objeto    | Objeto modificado     | No (pero muta el destino)|

*forEach no muta el array, pero puedes mutar los elementos dentro del callback.

---

¡Listo! Este machete te servirá como referencia rápida para trabajar con arrays en tus proyectos.
