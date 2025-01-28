/* esPar = () => {
    do {
        const respuesta = prompt('Ingresar número, recuerda que para salir del programa solo debes escribir Salir', '0');
        if( respuesta === 'Salir'){
            alert('El programa se ha terminado');
            break;
        }
        const number = Number(respuesta);
        if(isNaN(number)){
            alert('Ingresa un número o explicitamente Salir');
        }else {
        if( number % 2 === 0){
            alert('El número es par');
        } else {
            alert('El número es impar');
        }}
    } while (true);
} */


/* const number = Math.floor(Math.random() * 100) + 1;

const adivinanza = () => {
    do {
        const respuesta = Number(prompt('Ingrese el número que usted crea, es el correcto, debe ser entre 1 y 100', 0));

        if(isNaN(respuesta)){
            alert('Por favor ingrese un número');
        } else {
            if (respuesta === number) {
                alert('¡Felicidades!, es correcto el número era: ' + number);
                break;
            } else if (respuesta > number) {
                alert('El número es menor')
            } else {
                alert('El número es mayor');
            }
        }
    } while (true);
}
 */


/* const fizzBuzz = () => {
    for(let i = 1; i < 51; i++){
        (i % 3 === 0 && i % 5 === 0) ? console.log('FizzBuzz')
                      : (i % 5 === 0) ? console.log('Buzz')
                      : (i % 3 === 0) ? console.log('Fizz')
                      : console.log(i);
    }
} */

