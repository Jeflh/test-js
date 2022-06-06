// POO

// Object litral
const producto = {
    nombre : 'Tablet',
    precio: 500
}


// Object constructor
function Cliente(nombre, apelllido) {
    this.nombre = nombre;
    this.apellido = apelllido;
}
Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}


function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio} y su disponibilidad es ${this.disponible}`;
}

const producto2 = new Producto('Monitor Curvo 49"', 800, true);
const producto3 = new Producto('Laptop', 300, true);
const producto4 = new Producto('Audifonos', 50, false);
const cliente = new Cliente('Juan', 'Fernández');

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
