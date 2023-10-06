class Context {
    constructor(strategy){
        this.strategy = strategy
    }


    //Metodo para establecer la estrategia en tiempo de ejecucion
    setStrategy(strategy){
        this.strategy = strategy
    }

    //Metodo para utilizar la estrategia actual para realizar una operacion
    executeStrategy(){
        return this.strategy.execute()
    }


}

class Strategy {
    execute(){
        throw new Error('Execute debe ser implementado por una estrategia completa')
    }
}

class ConcreteStrategy1 {
    execute(){
        return "Ejecucion de la estrategia 1"
    }
}

class ConcreteStrategy2 {
    execute(){
        return "Ejecucion de la estrategia 2"
    }
}
class ConcreteStrategy3 {
    execute(){
        return "Ejecucion de la estrategia 3"
    }
}

const context = new Context(new ConcreteStrategy1())


console.log(context.executeStrategy())

context.setStrategy(new ConcreteStrategy2())

console.log(context.executeStrategy())

context.setStrategy(new ConcreteStrategy3())

console.log(context.executeStrategy())