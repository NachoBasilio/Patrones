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

    setTemperature(temperature){
        this.temperature = temperature;
        this.notificar();
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
const display1 = new Display();
const display2 = new Display();

weatherData.agregarObservador(display1);
weatherData.agregarObservador(display2);

console.log(display1.temperature); 
console.log(display2.temperature); 

weatherData.setTemperature(30);

console.log(display1.temperature); 
console.log(display2.temperature); 
