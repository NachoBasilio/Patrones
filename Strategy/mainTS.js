var EstrategiaEfectivo = /** @class */ (function () {
    function EstrategiaEfectivo() {
    }
    EstrategiaEfectivo.prototype.ejecutar = function (monto) {
        console.log("Pago en efectivo de con un 15% de descuento ".concat(monto * 0.85));
    };
    return EstrategiaEfectivo;
}());
var EstrategiaTarjeta = /** @class */ (function () {
    function EstrategiaTarjeta() {
    }
    EstrategiaTarjeta.prototype.ejecutar = function (monto) {
        console.log("Pago con tarjeta de ".concat(monto));
    };
    return EstrategiaTarjeta;
}());
var Contexto = /** @class */ (function () {
    function Contexto(estrategia) {
        this.estrategia = estrategia;
    }
    Contexto.prototype.ejecutarEstrategia = function (monto) {
        this.estrategia.ejecutar(monto);
    };
    return Contexto;
}());
var estrategiaActual = new EstrategiaTarjeta();
var contexto = new Contexto(estrategiaActual);
contexto.ejecutarEstrategia(100);
