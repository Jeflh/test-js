const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;
    
    if(auth){
        resolve('Usuario autenticado');  // El Promise se cumple
    } else {
        reject('No se pudo iniciar sesión');   // El Promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

/**
 * En los Promise existen 3 valores
 * pending: No se ha cumplido pero tampoco se ha rechazado
 * fulfilled: Ya se cumplió
 * rejected: se ha rechazado o no se pudo cumplir
 */