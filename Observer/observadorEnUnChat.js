class CanalChat {
    constructor() {
        this.usuarios = [];
        this.mensajes = [];
    }

    agregaUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    eliminaUsuario(usuario) {
        this.usuarios = this.usuarios.filter(u => u !== usuario);
    }

    agregaMensaje(mensaje, remitente) {
        this.mensajes.push(mensaje);
        this.notifica(mensaje, remitente);
    }

    notifica(mensaje, remitente) {
        if (this.usuarios.length === 0) {
            return;
        }
        this.usuarios.forEach(usuario => {
            if (usuario !== remitente) {
                usuario.recibeMensaje(mensaje, remitente);
            }
        });
    }
}

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    recibeMensaje(mensaje, remitente) {
        console.log(`El usuario ${this.nombre} recibió el mensaje: ${mensaje} de parte de ${remitente.nombre}`);
    }

    enviaMensaje(mensaje, canal) {
        canal.agregaMensaje(mensaje, this);
    }
}

const canal = new CanalChat();

const usuario1 = new Usuario('Juan');
const usuario2 = new Usuario('Pedro');
const usuario3 = new Usuario('María');


canal.agregaUsuario(usuario1);
canal.agregaUsuario(usuario2);
canal.agregaUsuario(usuario3);

usuario3.enviaMensaje('Hola a todos', canal);


