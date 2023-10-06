var ColorSequenceGenerator = /** @class */ (function () {
    function ColorSequenceGenerator() {
    } //El constructor es privado para que no se pueda instanciar la clase desde afuera
    ColorSequenceGenerator.getInstance = function () {
        if (!ColorSequenceGenerator.instance) {
            ColorSequenceGenerator.instance = new ColorSequenceGenerator();
        }
        return ColorSequenceGenerator.instance;
    };
    ColorSequenceGenerator.prototype.generateSequence = function (length) {
        var colors = ['rojo', 'verde', 'azul', 'amarillo'];
        var sequence = [];
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * colors.length);
            sequence.push(colors[randomIndex]);
        }
        return sequence;
    };
    return ColorSequenceGenerator;
}());
//Utiliza la consola para interactuar con el jugador. Muestra los colores de la secuencia y solicita que los repita. Verifica si la respuesta del jugador coincide con la secuencia generada.
function playGame() {
    var generator = ColorSequenceGenerator.getInstance();
    var sequence = generator.generateSequence(4); // Genera una secuencia de 4 colores (puedes ajustar la longitud según desees)
    console.log('¡Bienvenido al juego de memoria de colores!');
    console.log('Observa la secuencia de colores y repítela.');
    console.log('Secuencia:', sequence);
    // Lógica para solicitar la secuencia al jugador y verificar si es correcta
}
playGame();
