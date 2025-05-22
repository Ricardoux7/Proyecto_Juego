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
const magoDeHieloHabilidad = (atacante, atacado) => {
  console.log(`el mago de hielo ha usado su habilidad especial y ha congelado a ${atacado.nombre}`);
  atacado.vida = atacado.vida - 10;
  atacado.nombre = atacado.nombre + ` (congelado)`;
  atacante.usado++;
};

let magoDeFuegoHabilidad = (atacante, atacado) => {
  console.log(`el mago de fuego ha usado su habilidad especial y se ha robado el 25% de la vida de ${atacado.nombre}`);
  let vidaRobada = Math.floor(atacado.vida * 0.25);
  atacado.vida = atacado.vida - vidaRobada;
  atacante.vida = atacante.vida + vidaRobada;
  console.log(`vida del mago de fuego: ${atacante.vida} vida del enemigo: ${atacado.vida}`);
  if(atacante.vida > 100) {
    atacante.vida = 100;
  }
  atacante.usado++;
}

let guerreroLiderHabilidad = (atacante, atacado) => {
  console.log(`el guerrero lider ha usado su habilidad especial y ha contraatacado a ${atacado.nombre}`);
  let dañoContraataque = Math.floor(atacado.ataque / 2);
  atacado.vida = atacado.vida - dañoContraataque;
  if(atacado.vida < 0) {
    atacado.vida = 0;
  }
  atacante.usado++;
}

let guerreroVeteranoHabilidad = (atacante, atacado) => {
  console.log(`el guerrero veterano ha usado su habilidad especial y ha duplicado su ataque`);
  atacante.ataque = atacante.ataque * 2;
  atacante.usado++;
}

let arqueroHabilidad = (atacante, atacado) => {
  console.log(`el arquero ha usado su habilidad especial y se ha curado un 25% de su vida`);
  let vidaCurada = Math.floor(atacante.vida * 0.25);
  atacante.vida = atacante.vida + vidaCurada;
  if(atacante.vida > 100) {
    atacante.vida = 100;
  }
  atacante.usado++;
}

let magoDeHielo = new Personaje(`Mago de Hielo`, 100, 13, Math.floor(Math.random()*2), 25, [{nombre: `Bola de hielo`, daño:12}, {nombre:`Tormenta de Nieve`, daño: 20}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, magoDeHieloHabilidad, `Congela al enemigo durante 1 turno`, 0)
let magoDeFuego = new Personaje(`Mago de Fuego`, 100, 30, Math.floor(Math.random()*2), 40, [{nombre: `Bola de fuego`, daño:23}, {nombre:`Lluvia volcanica`, daño: 25}, {nombre: `Rayo`, daño: 30}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, magoDeFuegoHabilidad, `el daño que le hace al enemigo se lo roba`, 0)
let guerreroLider = new Personaje(`Guerrero Lider`, 100, 30, Math.floor(Math.random()*2), 35, [{nombre: `Espada`, daño:30}, {nombre: `Hacha`, daño:40}, {nombre: `Lanza`, daño: 20}, {nombre: `Martillo`, daño: 18}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, guerreroLiderHabilidad, `devuelve la mitad del daño que le hace el enemigo`, 0)
let guerreroVeterano = new Personaje(`Guerrero Veterano`, 100, 20, Math.floor(Math.random()*2), 25, [{nombre: `Katana`, daño:30}, {nombre: `canon`, daño:40}, {nombre: `Lanza`, daño: 20}, {nombre: `Machete`, daño: 18}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, guerreroVeteranoHabilidad, `duplica el ataque x2 durante 1 turno`, 0)
let arquero = new Personaje(`Arquero`, 100, 10, Math.floor(Math.random()*2), 25, [{nombre: `Flecha`, daño:30}, {nombre: `Flecha explosiva`, daño:40}, {nombre: `Flecha de fuego`, daño: 20}, {nombre: `flecha venenosa`, daño: 18}, {nombre: `puño`, daño: (Math.floor(Math.random()*15))}], 0, arqueroHabilidad, `se cura un 25% de su vida`, 0)

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
    if (atacante.nombre.includes('congelado')) {
      console.log(`${atacante.nombre} no puede atacar porque esta congelado`);  
      atacante.nombre = atacante.nombre.replace(` (congelado)`, ``);
      console.log(`/////////////////////////////////////////////////////////////////////////`);
      continue;
    }
    let posiblesAtacados = orden.filter((personaje) => personaje !== atacante && personaje.vida > 0);
    if (posiblesAtacados.length === 0) {
      continue;
    }
    let atacado = posiblesAtacados.filter((personaje)=> personaje.vida > 0)[Math.floor(Math.random() * posiblesAtacados.length)];
    if(Math.floor(Math.random()*12) === 7 && atacante.usado===0){
      atacante.habilidadEspecial(atacante, atacado)
    }
    else{
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

do {
  let orden = []
  ordenAtaqueF();
  ataques();
} while (personajesVivos > 1);
console.log(`El ganador es ${personajes[0].nombre} con ${personajes[0].vida} de vida`);