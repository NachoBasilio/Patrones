class WeatherData {
    constructor(){
        this.temperature = 0;
        this.observers = [];
    }

    agregarObservador(observer){
        this.observers.push(observer);
    }

    eliminarObservador(observer){
        const index = this.observers.indexOf(observer);
        if(index > -1){
            this.observers.splice(index, 1);
        }
    }

    notificar(){
        this.observers.forEach(observer => {
            observer.actualizar(this.temperature);
        });
    }
}

class Display {
    constructor(){
        this.temperature = 0;
    }

    actualizar(temperature){
        this.temperature = temperature;
        console.log(`La temperatura actual es: ${this.temperature}`);
    }
}

const weatherData = new WeatherData();
const display = new Display();
weatherData.agregarObservador(display);

