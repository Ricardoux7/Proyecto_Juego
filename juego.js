/* 
Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje
*/
//maximo:50

class Personaje{
    constructor(nombre, vida, ataque, defensa, velocidad, habilidades, probabilidadEmpezar, habilidadEspecial, infoHabilidad, usado){
    this.nombre = nombre
    this.vida = vida
    this.ataque = ataque
    this.defensa = defensa
    this.velocidad = velocidad
    this.habilidades = habilidades
    this.probabilidadEmpezar = probabilidadEmpezar
    this.habilidadEspecial = habilidadEspecial
    this.infoHabilidad = infoHabilidad
    this.usado = usado
    }
    Saludar(){
        console.log(`Hola, soy el ${this.nombre}, tengo los poderes especiales de ${this.habilidades.map((habilidad) => {
            return ` ` + habilidad.nombre
        })}`)    
    }
}
let orden = []

let magoDeHielo = new Personaje(`Mago de Hielo`, 100, 13, Math.floor(Math.random()*2), 25, [{nombre: `Bola de hielo`, daño:12}, {nombre:`Tormenta de Nieve`, daño: 20}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, `Congelar`, `Congela al enemigo durante 1 turno`, 0)
let magoDeFuego = new Personaje(`Mago de Fuego`, 100, 30, Math.floor(Math.random()*2), 40, [{nombre: `Bola de fuego`, daño:23}, {nombre:`Lluvia volcanica`, daño: 25}, {nombre: `puño`, daño: 15}, {nombre: `Rayo`, daño: 30}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, `robo de vida`, `el daño que le hace al enemigo se lo roba`, 0)
let guerreroLider = new Personaje(`Guerrero Lider`, 100, 30, Math.floor(Math.random()*2), 35, [{nombre: `Espada`, daño:30}, {nombre: `Hacha`, daño:40}, {nombre: `Lanza`, daño: 20}, {nombre: `Martillo`, daño: 18}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, `Contraataque`, `devuelve la mitad del daño que le hace el enemigo`, 0)
let guerreroVeterano = new Personaje(`Guerrero Veterano`, 100, 20, Math.floor(Math.random()*2), 25, [{nombre: `Katana`, daño:30}, {nombre: `canon`, daño:40}, {nombre: `Lanza`, daño: 20}, {nombre: `Machete`, daño: 18}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, `furia`, `duplica el ataque un 50% durante 1 turno`, 0)
let arquero = new Personaje(`Arquero`, 100, 10, Math.floor(Math.random()*2), 25, [{nombre: `Flecha`, daño:30}, {nombre: `Flecha explosiva`, daño:40}, {nombre: `Flecha de fuego`, daño: 20}, {nombre: `flecha venenosa`, daño: 18}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, `cura`, `se cura un 25% de su vida`, 0)

magoDeHielo.Saludar()
magoDeFuego.Saludar()
guerreroLider.Saludar()
guerreroVeterano.Saludar()
arquero.Saludar()

let personajes = [magoDeHielo, magoDeFuego, guerreroLider, guerreroVeterano, arquero]
let personajesVivos = personajes.length
let personajesMuertos = 0

const ordenAtaqueF = () => {
let velocidades = [];
  for (let i = 0; i < personajes.length; i++) {
    personajes[i].probabilidadEmpezar = Math.floor(Math.random() * personajes[i].velocidad);
    while(velocidades.includes(personajes[i].probabilidadEmpezar)) {
        personajes[i].probabilidadEmpezar = Math.floor(Math.random() * personajes[i].velocidad);
    }
    velocidades.push(personajes[i].probabilidadEmpezar);
  }
  orden = personajes.sort((a, b) => {
    return b.probabilidadEmpezar - a.probabilidadEmpezar;
  });
  console.log(`---------------------------------------------------------------------------------`);
  console.log(`Orden de ataque:`);
  console.log(orden.map(personaje => personaje.nombre + ` (${personaje.probabilidadEmpezar})`).join(`\n`));
  console.log(`---------------------------------------------------------------------------------`);
}
ataques = () => {
  for (let i = 0; i < orden.length; i++) {
    let atacante = orden[i];
    if (atacante.vida <= 0) {
      continue;
    }
    let posiblesAtacados = orden.filter((personaje) => personaje !== atacante && personaje.vida > 0);
    if (posiblesAtacados.length === 0) {
      continue;
    }
    let atacado = posiblesAtacados.filter((personaje)=> personaje.vida > 0)[Math.floor(Math.random() * posiblesAtacados.length)];
    let indiceArma = Math.floor(Math.random() * (atacante.habilidades.length));
    let arma = atacante.habilidades[indiceArma].nombre;
    let daño = atacante.habilidades[indiceArma].daño;
    atacado.defensa = Math.floor(Math.random() * 2);
    if(atacado.defensa === 1){
      console.log(`${atacante.nombre} ataca a ${atacado.nombre} con ${arma} pero ${atacado.nombre} se defiende`);
    }
    else if(atacado.defensa === 0){
      atacado.vida = atacado.vida - daño;
      if(atacado.vida < 0 || atacado.vida == 0) {
        atacado.vida = 0;
      }
    console.log(`${atacante.nombre} ataca a ${atacado.nombre} con ${arma} causando un daño de ${daño}, dejandole de vida ${atacado.vida}`);
      }
    console.log(`////////////////////////////////////////////////////////////////////////`);
  }
  for (const vida of personajes) {
    if(vida.vida === 0) {
      console.log(`${vida.nombre} ha muerto`);
      personajesMuertos++;
      personajesVivos--;
      personajes.splice(personajes.indexOf(vida), 1);
    }
  }
  console.log(`Personajes vivos: ${personajesVivos}`);
  console.log(`---------------------------------------------------------------------------------`);
}

habilidadMagoDeHielo = () => {
  if(Math.floor(Math.random() * 6)===3 && !magoDeHielo.usado){
    magoDeHielo.usado = true;
    }
}

do {
  let orden = []
  ordenAtaqueF();
  ataques();
} while (personajesVivos > 1);
console.log(`El ganador es ${personajes[0].nombre} con ${personajes[0].vida} de vida`);