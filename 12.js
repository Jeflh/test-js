"use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
Object.freeze(producto); // Congela totalmente el objeto, no puedes modificar, agregar ni eliminar propiedades

Object.seal(producto); // Permite modificar propiedades

// producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

console.log(producto);

