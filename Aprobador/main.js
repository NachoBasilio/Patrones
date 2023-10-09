class Aprobador {
    constructor(nombre, limite){
        this.nombre = nombre;
        this.limite = limite;
        this.siguienteAprobador = null;
    }

    establecerSiguienteAprobador(aprobador){
        this.siguienteAprobador = aprobador;
    }

    aprobarSolicitud(solicitud){
        if(solicitud.dias <= this.limite){
            console.log(`La solicitud fue aprobada por ${this.nombre}`);
        }else if (this.siguienteAprobador){
            console.log(`La solicitud fue enviada a ${this.siguienteAprobador.nombre}`);
            this.siguienteAprobador.aprobarSolicitud(solicitud);
        }else{
            console.log(`La solicitud no fue aprobada`);
        }
    }
}

const supervisor = new Aprobador('Supervisor', 5);
const gerente = new Aprobador('Gerente', 10);
const director = new Aprobador('Director', 30);


supervisor.establecerSiguienteAprobador(gerente);
gerente.establecerSiguienteAprobador(director);

const solicitud = {dias: 10, nombre: 'Juan'};

supervisor.aprobarSolicitud(solicitud);
