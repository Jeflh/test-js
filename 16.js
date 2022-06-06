// Declaración de función

function sumar(){
    console.log(10 + 10);

}

sumar();

// Expresión de la función

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE sirve para proteger las variables para que no sean utilizadas por otros archivos
(function() {
    console.log("Esto es una función");
})();

