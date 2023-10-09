const verificarAutenticacion = (target: any, propertyKey: string, descriptor:PropertyDescriptor): PropertyDescriptor=>{
    const metodoOriginal = descriptor.value;

    descriptor.value = function(){
        if(estaAutenticado()){
            return metodoOriginal.call(this);
        } else{
            console.log("Acceso no autorizado. Debes iniciar sesión")
        }
    }

    return descriptor
}

class Ruta{
    constructor(){

    }

    @verificarAutenticacion
    acceder():void{
        console.log("Accediendo a la ruta...")
    }
}

function estaAutenticado():boolean{
    return false;
}

//La verdad que no esta explicando nada...