class Pastel {
    obtenerDescripcion() {
        return "Pastel Basico";
    }

    obtenerCosto() {
        return 100;
    }
}


class DecoradorPastel extends Pastel {
    constructor(pastel){
        super()
        this.pastel = pastel;
    }

    obtenerDescripcion() {
        return this.pastel.obtenerDescripcion();
    }

    obtenerCosto() {
        return this.pastel.obtenerCosto();
    }
}


class CremaBatida extends DecoradorPastel {
    constructor(pastel){
        super(pastel)
    }

    obtenerDescripcion() {
        return super.obtenerDescripcion() + " + Crema Batida";
    }

    obtenerCosto() {
        return super.obtenerCosto() + 50;
    }
}

class DecoradorFrutas extends DecoradorPastel {
    constructor(pastel){
        super(pastel)
    }

    obtenerDescripcion() {
        return super.obtenerDescripcion() + " + Frutas";
    }

    obtenerCosto() {
        return super.obtenerCosto() + 20;
    }
}

//Decoradro chocolate

class DecoradorChocolate extends DecoradorPastel {
    constructor(pastel){
        super(pastel)
    }

    obtenerDescripcion() {
        return super.obtenerDescripcion() + " + Chocolate";
    }

    obtenerCosto() {
        return super.obtenerCosto() + 30;
    }
}


//Creamos un pastel 

const pastel = new Pastel();


const pastelDecorado = new CremaBatida(new DecoradorFrutas(new DecoradorChocolate(pastel)));

console.log(pastelDecorado.obtenerDescripcion());

console.log(pastelDecorado.obtenerCosto());


