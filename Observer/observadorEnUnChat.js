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

    agregaMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }

    notifica(mensaje) {
        this.usuarios.forEach(usuario => usuario.recibeMensaje(mensaje));
    }
}

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    recibeMensaje(mensaje) {
        console.log(`${this.nombre} recibió: ${mensaje}`);
    }

    enviaMensaje(mensaje, canal) {
        canal.agregaMensaje(mensaje);
        canal.notifica(mensaje);
    }
}

const canal = new CanalChat();

const usuario1 = new Usuario('Juan');
const usuario2 = new Usuario('Pedro');
const usuario3 = new Usuario('María');


canal.agregaUsuario(usuario1);
canal.agregaUsuario(usuario2);
canal.agregaUsuario(usuario3);



canal.notifica('Mensaje de todos: ¡Hola a todos!');
