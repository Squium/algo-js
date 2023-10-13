//Définition de la classe Pokémon

class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  //Fonction isLucky

  isLucky() {
    return Math.floor(Math.random() * 100 <= this.luck); //Calcul d'un nombre aléatoire entre 1 et 100
  }

  //Fonction attackpokemon

  attackPokemon(pokemon) {
    if (this.isLucky()) { //Si le Pokémon a de la chance
      let dommages = this.attack - pokemon.defense;
      pokemon.hp -= dommages;
      console.log(this.name, "a attaqué", pokemon.name, "perdant", dommages, "hp et n'a plus que", this.hp, "hp !" ); 
    } else {
      console.log(this.name, "a raté son attaque");
    }
  }
}

//Fin de classe Pokémon

//Création Pokémons

let salameche = new Pokemon("Salamèche", 50, 30, 180, 55); // Salamèche a 50 PAtt, 30 PDef, 180 PV et 55% de chance de toucher son adversaire
let evoli = new Pokemon("Évoli", 55, 35, 90, 65); // Évoli a 55 PA, 35 PD, 90 PV et 65% de chance de toucher son adversaire

//Boucle d'attaques Pokémons

while (salameche.hp > 0 && evoli.hp > 0) {
  salameche.attackPokemon(evoli);
  evoli.attackPokemon(salameche);
}

//Conclusion du combat

if (salameche.hp <= 0) {
  console.log("Évoli a gagné contre Salamèche !"); //Si les hp de salamèche sont à 0, Évoli a gagné
} else {
  console.log("Salamèche a gagné contre Évoli !"); //Sinon, Salamèche a gagné
}
