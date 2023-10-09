//El patron factory es un patron de diseño creacional que se utiliza para crear objetos de manera condicional
//Este patron se utiliza cuando la creacion de un objeto no es tan sencilla o cuando se requiere de una logica para crear un objeto

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

class FabricarProducto{//Esta clase funciona como una interfaz
    crearProducto(nombre, precio){
        throw new Error('No se puede crear un producto desde una clase madre');
    }
}

class FabricarProductoConcreto extends FabricarProducto{
    crearProducto(nombre, precio){
        return new Producto(nombre, precio);
    }
}

class FabricaDescuento extends FabricarProducto{
    crearProducto(nombre, precio){
        const precionConDescuento = precio * 0.9;
        return new ProductoConDescuento(nombre, precionConDescuento);
    }
}



const fabrica = new FabricarProductoConcreto();
const fabricaDescuento = new FabricaDescuento();

const producto1 = fabrica.crearProducto('Monitor 24 pulgadas', 100);
const producto2 = fabricaDescuento.crearProducto('Monitor 24 pulgadas', 100);