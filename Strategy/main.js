// class Context {
//     constructor(strategy){
//         this.strategy = strategy
//     }


//     //Metodo para establecer la estrategia en tiempo de ejecucion
//     setStrategy(strategy){
//         this.strategy = strategy
//     }

//     //Metodo para utilizar la estrategia actual para realizar una operacion
//     executeStrategy(){
//         return this.strategy.execute()
//     }


// }

// class Strategy {
//     execute(){
//         throw new Error('Execute debe ser implementado por una estrategia completa')
//     }
// }

// class ConcreteStrategy1 {
//     execute(){
//         return "Ejecucion de la estrategia 1"
//     }
// }

// class ConcreteStrategy2 {
//     execute(){
//         return "Ejecucion de la estrategia 2"
//     }
// }
// class ConcreteStrategy3 {
//     execute(){
//         return "Ejecucion de la estrategia 3"
//     }
// }

// const context = new Context(new ConcreteStrategy1())


// console.log(context.executeStrategy())

// context.setStrategy(new ConcreteStrategy2())

// console.log(context.executeStrategy())

// context.setStrategy(new ConcreteStrategy3())

// console.log(context.executeStrategy())



// Paso 1: Definir la clase Producto
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
   
    calcularDescuento(descuentoStrategy) {
      return descuentoStrategy.aplicarDescuento(this.precio);
    }
  }
   
  // Paso 2: Definir la interfaz DescuentoStrategy
  class DescuentoStrategy {
    aplicarDescuento(precio) {
      throw new Error('Debe implementar el método aplicarDescuento.');
    }
  }
   
  // Paso 3: Implementar las clases DescuentoPorcentaje, DescuentoCantidadFija y SinDescuento
  class DescuentoPorcentaje extends DescuentoStrategy {
    constructor(porcentaje) {
      super();
      this.porcentaje = porcentaje;
    }
   
    aplicarDescuento(precio) {
      return precio - (precio * this.porcentaje) / 100;
    }
  }
   
  class DescuentoCantidadFija extends DescuentoStrategy {
    constructor(cantidad) {
      super();
      this.cantidad = cantidad;
    }
   
    aplicarDescuento(precio) {
      return precio - this.cantidad;
    }
  }
   
  class SinDescuento extends DescuentoStrategy {
    aplicarDescuento(precio) {
      return precio;
    }
  }
   
  // Paso 5: Crear instancias de Producto y aplicar descuentos
  const producto1 = new Producto('Camiseta', 500);
  const producto2 = new Producto('Pantalón', 1000);
   
  const descuentoPorcentaje = new DescuentoPorcentaje(20);
  const descuentoCantidadFija = new DescuentoCantidadFija(100);
  const sinDescuento = new SinDescuento();
   
  console.log(`Producto: ${producto1.nombre}`);
  console.log(`Precio original: ${producto1.precio}`);
  console.log(`Precio con descuento (descuento porcentaje): ${producto1.calcularDescuento(descuentoPorcentaje)}`);
  console.log(`Precio con descuento (descuento cantidad fija): ${producto1.calcularDescuento(descuentoCantidadFija)}`);
  console.log(`Precio con descuento (sin descuento): ${producto1.calcularDescuento(sinDescuento)}`);
  console.log('---');
   
  console.log(`Producto: ${producto2.nombre}`);
  console.log(`Precio original: ${producto2.precio}`);
  console.log(`Precio con descuento (descuento porcentaje): ${producto2.calcularDescuento(descuentoPorcentaje)}`);
  console.log(`Precio con descuento (descuento cantidad fija): ${producto2.calcularDescuento(descuentoCantidadFija)}`);
  console.log(`Precio con descuento (sin descuento): ${producto2.calcularDescuento(sinDescuento)}`);

