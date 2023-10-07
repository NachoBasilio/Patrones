interface Estrategia {
    ejecutar(monto:number): void;
}

class EstrategiaEfectivo implements Estrategia {
    ejecutar(monto:number): void {
        console.log(`Pago en efectivo de con un 15% de descuento ${monto * 0.85}`);
    }
}

class EstrategiaTarjeta implements Estrategia {
    ejecutar(monto:number): void {
        console.log(`Pago con tarjeta de ${monto}`);
    }
}


class Contexto {
    private estrategia: Estrategia;

    constructor(estrategia: Estrategia) {
        this.estrategia = estrategia;
    }

    public ejecutarEstrategia(monto:number): void {
        this.estrategia.ejecutar(monto);
    }
}

const contexto = new Contexto(new EstrategiaEfectivo());
contexto.ejecutarEstrategia(100);
