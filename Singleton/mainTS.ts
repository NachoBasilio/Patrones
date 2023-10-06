//Singleton TypeScript

class MySingleton {
    private static instance: MySingleton;//Esta es una variable estatica, que solo se puede acceder desde la clase y guarda la instancia de la clase 

    private constructor(
        private data: string = "inicial data"
    ){}//El constructor es privado para que no se pueda instanciar la clase desde afuera

    public static getInstance(): MySingleton { //Este metodo es el que se encarga de crear la instancia de la clase
        if(!MySingleton.instance){
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public getData(): string {
        return this.data;
    }
}

const singlentonIstance1 = MySingleton.getInstance();//GetInstance solo se puede ejecutar desde la clase, haciendo referencia a la variable estatica
console.log(singlentonIstance1);

singlentonIstance1.getData()
singlentonIstance1.setData("New data");

console.log(singlentonIstance1.getData());

const singlentonIstance2 = MySingleton.getInstance();

console.log(singlentonIstance2.getData());