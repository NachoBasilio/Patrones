class AdapterAAC {
    constructor(aacPlayer){
        this.aacPlayer = aacPlayer;
    }

    reproduciorArchivoAAC(nombreArchivo){
        this.aacPlayer.playAAC(nombreArchivo);
    }
}

class AdapterMP3 {

    reproduciorArchivoMP3(nombreArchivo){
        console.log("Reproduciendo archivo MP3: " + nombreArchivo);
    }
}

class ReproductorAAC{
    playAAC(nombreArchivo){
        console.log("Reproduciendo archivo AAC: " + nombreArchivo);
    }
}

const reproductorMP3 = new AdapterMP3();
const reproductorAAC = new ReproductorAAC();

const adapterAAC = new AdapterAAC(reproductorAAC);

reproductorMP3.reproduciorArchivoMP3("archivo.mp3");
adapterAAC.reproduciorArchivoAAC("archivo.aac");