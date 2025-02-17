/*
class Vehiculo  {
    marca  = '';
    modelo = '';
    anio   =  0;

    constructor(marca = 'Sin marca', modelo = 'Sin modelo', anio = 0) {
        this.marca  = marca;
        this.modelo = modelo;
        this.anio   = anio;
    }

    info() {
        console.log('El Vehiculo se está creando');
    }

    arrancar() {
        console.log('Aún no hemos podido arrancars');
    }
}
class Auto extends Vehiculo  {
    puertas = 0;

    constructor(marca = 'Sin marca', modelo = 'Sin modelo', anio = 0, puertas = 0) {
        super(marca, modelo, anio);

        this.puertas = puertas;
    }

    info() {
        console.log(`Mi coche es de marca: ${this.marca}, y el modelo es: ${this.modelo} y de año ${this.anio}, y cuenta con ${this.puertas} puertas.`);
    }

    arrancar() {
        console.log(`El auto ${this.marca} está arrancando.`);
    }
}

class Moto extends Vehiculo  {
    cilindraje = 0;

    constructor(marca = 'Sin marca', modelo = 'Sin modelo', anio = 0, cilindraje = 0) {
        super(marca, modelo, anio);

        this.cilindraje = cilindraje;
    }

    info() {
        console.log(`Mi moto es de marca: ${this.marca}, y el modelo es: ${this.modelo} y de año ${this.anio}, y cuenta con un cilindraje de ${this.cilindraje}.`);
    }

    arrancar() {
        console.log(`La moto ${this.marca} está arrancando.`);
    }
}

const renault = new Auto('Renault', 'Renault 5', 2025, 4);
const bmw     = new Moto('BMW', 'S 1000 XR', 2023, 999);

renault.info();
renault.arrancar();

bmw.info();
bmw.arrancar();
*/
