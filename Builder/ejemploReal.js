class Reporterbuilder{
    constructor(){
        this.encabezado = "";
        this.contenido = "";
        this.pieDePagina ="";
    }

    setEncabezado(encabezado){
        this.encabezado = encabezado;
        return this;//Esto permite encadenar
    }

    setContenido(contenido){
        this.contenido = contenido;
        return this;
    }

    setPieDePagina(pieDePagina){
        this.pieDePagina = pieDePagina;
        return this;
    }

    build(){
        return new Reporte(this.encabezado, this.contenido, this.pieDePagina);
    }
}

class Reporte{
    constructor(encabezado, contenido, pieDePagina){
        this.encabezado = encabezado;
        this.contenido = contenido;
        this.pieDePagina = pieDePagina;
    }

    mostrarNota(){
        console.log(this.encabezado);
        console.log(this.contenido);
        console.log(this.pieDePagina);
    }
}

const reporte = new Reporterbuilder()
                .setEncabezado("Encabezado")
                .setContenido("Contenido")
                .setPieDePagina("Pie de pagina")
                .build();

reporte.mostrarNota();

