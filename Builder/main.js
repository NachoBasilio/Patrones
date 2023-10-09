//HABLO ESPAÑOL

class PizzaBuilder {
    constructor(){
        this.tipo = '';
        this.tamanho = '';
        this.ingredientes = [];
    }

    setTipo(tipo){
        this.tipo = tipo;
        return this;
    }

    setTamanho(tamanho){
        this.tamanho = tamanho;
        return this;
    }

    agregarIngredientes(ingredientes){
        this.ingredientes.push(ingredientes);

        return this;
    }

    build(){
        return new Pizza(this.tipo, this.tamanho, this.ingredientes);
    }
}

class Pizza {
    constructor(tipo, tamanho, ingredientes) {
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.ingredientes = ingredientes;    
    }

    mostrarPizza(){
        console.log(`Pizza ${this.tipo} ${this.tamanho} con los siguiente ingredientes: ${this.ingredientes.join(', ')}`);
    }
}

const pizzaConJamon = new PizzaBuilder()

pizzaConJamon.setTipo('Jamon')
            .setTamanho('Grande')
            .agregarIngredientes('Jamon')
            .agregarIngredientes('Queso')
            .agregarIngredientes('Tomate')
            .build()
            .mostrarPizza();

            

