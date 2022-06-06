// Classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    retornarPrecio() {
        return `El precio del producto es $${this.precio}`;
    }
}


const producto2 = new Producto('Monitor Curvo 49"', 800);
const producto3 = new Producto('Laptop', 300);

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearLibro() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la revolución', 120, '9906361230');
console.log(libro.formatearLibro());

console.log(producto2);
console.log(producto3.retornarPrecio());