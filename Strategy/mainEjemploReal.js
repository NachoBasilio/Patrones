class Contexto {
    constructor(estrategia){
        this.estrategia = estrategia
    }

    realizarAccion(number){
        return this.estrategia.ejecutar(number)
    }

    setEstrategia(estrategia){
        this.estrategia = estrategia
    }
}

//Definimos la clase EstrategiaRegular

class EstrategiaRegular {
    constructor(){
        this.impuesto = 0.21;
    }

    ejecutar(monto){
        return (monto * this.impuesto) + monto
    }
}

class EstrategiaPremium {
    constructor(){
        this.impuesto = 0.10;
    }

    ejecutar(monto){
        return (monto * this.impuesto) + monto
    }
}

const contexto = new Contexto(new EstrategiaRegular())
console.log(contexto.realizarAccion(23))

contexto.setEstrategia(new EstrategiaPremium())
console.log(contexto.realizarAccion(23))