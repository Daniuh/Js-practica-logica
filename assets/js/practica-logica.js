/* esPar = () => {
    do {
        const respuesta = prompt('Ingresar número, recuerda que para salir del programa solo debes escribir Salir', '0');
        if (respuesta === 'Salir') {
            alert('El programa se ha terminado');
            break;
        }
        const number = Number(respuesta);
        if (isNaN(number)) {
            alert('Ingresa un número o explicitamente Salir');
        } else {
            if (number % 2 === 0) {
                alert('El número es par');
            } else {
                alert('El número es impar');
            }
        }
    } while (true);
}
 */

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

/* const respuesta    = prompt('Ingrese el palíndromo');
const respuestaMin = respuesta.toLocaleLowerCase();
const respuestaEsp = respuestaMin.replace(/[\s\p{P}]/gu, '');
const respuestaInv = respuestaEsp.split('').reverse().join('');

const analizando = () => {
    if(respuestaInv === respuestaEsp) {
        alert('Es un palíndromo');
    }else {
        alert('No es un palíndromo')
    }
}
 */

/* const esCapicua = (number) => {
    const strNumber = String(number);
    const invertida = strNumber.split('').reverse().join('');
    return strNumber === invertida
}

console.log(esCapicua(123));
console.log(esCapicua(121)); 
*/

const numeroFaltante = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
    return null;
};

// Pruebas
console.log(numeroFaltante([1, 2, 3, 5]));  // 4
console.log(numeroFaltante([10, 11, 12, 14, 15])); // 13
console.log(numeroFaltante([21, 22, 23, 24, 26])); // 25
console.log(numeroFaltante([100, 101, 102, 103])); // null (ningún número falta)