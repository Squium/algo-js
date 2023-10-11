class Guerrier {
  constructor(attack, defense) {
    this.attack = attack;
    this.defense = defense;
  }

  getAttack() {
    console.log("Le guerrier attaque avec", this.attack, "points !");
  }
}

let Jeff = new Guerrier(500,50);
Jeff.getAttack();