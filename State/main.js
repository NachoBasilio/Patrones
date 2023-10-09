class ReproductorMusica{
    constructor(){
        this.estado = new EstadoDetenido();
    }

    cambiarEstado(estado){
        this.estado = estado;
    }

    reproducir(){
        this.estado.reproducir();
    }

    pausar(){
        this.estado.pausar();
    }

    detener(){
        this.estado.detener();
    }
}

class EstadoReproductor{
    reproducir(){
        throw new Error("Metodo no implementado");
    }

    pausar(){
        throw new Error("Metodo no implementado");
    }

    detener(){
        throw new Error("Metodo no implementado");
    }
}

class EstadoReproduccion extends EstadoReproductor{
    reproducir(){
        console.log("Reproduciendo...");
    }

    pausar(){
        console.log("Pausando...");
        reproductorMusica.cambiarEstado(new EstadoPausa());
    }

    detener(){
        console.log("Deteniendo...");
        reproductorMusica.cambiarEstado(new EstadoDetenido());
    }

}

class EstadoPausa extends EstadoReproductor{
    reproducir(){
        console.log("Reproduciendo...");
        reproductorMusica.cambiarEstado(new EstadoReproduccion());
    }

    pausar(){
        console.log("Pausando...");
    }

    detener(){
        console.log("Deteniendo...");
        reproductorMusica.cambiarEstado(new EstadoDetenido());
    }

}

class EstadoDetenido extends EstadoReproductor{
    reproducir(){
        console.log("Reproduciendo...");
        reproductorMusica.cambiarEstado(new EstadoReproduccion());
    }

    pausar(){
        console.log("Pausando...");
        reproductorMusica.cambiarEstado(new EstadoPausa());
    }

    detener(){
        console.log("Deteniendo...");
    }

}


const reproductorMusica = new ReproductorMusica();
reproductorMusica.reproducir();