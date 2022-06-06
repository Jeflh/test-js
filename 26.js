// This

const reservacion = {
    nombre: 'Juan',
    apellido: 'Fernández',
    total: 5000,
    pagado: false,
    informacion: function(){   // => hace referencia de manera global, function al objeto
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();