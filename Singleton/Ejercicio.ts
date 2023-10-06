class ColorSequenceGenerator {
    private static instance: ColorSequenceGenerator;//Esta es una variable estatica, que solo se puede acceder desde la clase y guarda la instancia de la clase 

    private constructor(
    ){}//El constructor es privado para que no se pueda instanciar la clase desde afuera

    public static getInstance(): ColorSequenceGenerator { //Este metodo es el que se encarga de crear la instancia de la clase
        if(!ColorSequenceGenerator.instance){
            ColorSequenceGenerator.instance = new ColorSequenceGenerator();
        }
        return ColorSequenceGenerator.instance;
    }



    public generateSequence(length: number): string[] {
        const colors = ['rojo', 'verde', 'azul', 'amarillo'];
        const sequence = [];
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * colors.length);
          sequence.push(colors[randomIndex]);
        }
        return sequence;
      }

}

//Utiliza la consola para interactuar con el jugador. Muestra los colores de la secuencia y solicita que los repita. Verifica si la respuesta del jugador coincide con la secuencia generada.
 
function playGame() :void{
    const generator = ColorSequenceGenerator.getInstance();
    const sequence = generator.generateSequence(4); // Genera una secuencia de 4 colores (puedes ajustar la longitud según desees)
   
    console.log('¡Bienvenido al juego de memoria de colores!');
    console.log('Observa la secuencia de colores y repítela.');
   
    console.log('Secuencia:', sequence);
   
    // Lógica para solicitar la secuencia al jugador y verificar si es correcta
  }
   
  playGame();
