//Singleton TypeScript
var MySingleton = /** @class */ (function () {
    function MySingleton(data) {
        if (data === void 0) { data = "inicial data"; }
        this.data = data;
    } //El constructor es privado para que no se pueda instanciar la clase desde afuera
    MySingleton.getInstance = function () {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    };
    MySingleton.prototype.setData = function (data) {
        this.data = data;
    };
    MySingleton.prototype.getData = function () {
        return this.data;
    };
    return MySingleton;
}());
var singlentonIstance1 = MySingleton.getInstance(); //GetInstance solo se puede ejecutar desde la clase, haciendo referencia a la variable estatica
console.log(singlentonIstance1);
singlentonIstance1.getData();
singlentonIstance1.setData("New data");
console.log(singlentonIstance1.getData());
var singlentonIstance2 = MySingleton.getInstance();
console.log(singlentonIstance2.getData());
