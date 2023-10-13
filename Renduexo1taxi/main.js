//Classe du tueur --------------------------------------------------------------------------------------------------------------------------------------

class tueur {
  constructor(nomtue, hp) {
    this.nomtue = nomtue;
    this.hp = hp;
  }

}


//Définitions des variables --------------------------------------------------------------------------------------------------------------------------------------

let Tabsurv = [];
let nomprov = null;
let nbrmorts = 0;
let Tabmorts = [];

//Création des noms des survivants --------------------------------------------------------------------------------------------------------------------------------------

let NomsSurvivants = ["Romain", "André","Anissa","Jean-Marc","Stéphanie","Dominique","Jade","Benjamin","Olivia","Gracia","Lucas","Louis"];

//Classe des survivants --------------------------------------------------------------------------------------------------------------------------------------

class survivant {
  constructor(nomsurv, nomtype, probamort, probaatt, probamortdeg) {
    this.nomsurv = nomsurv;
    this.nomtype = nomtype
    this.probamort = probamort;
    this.probaatt = probaatt;
    this.probamortdeg = probamortdeg;
  }
  
  ProbabilitéMeurt() {
    return Math.floor(Math.random() >= this.probamort);
  }

  ProbabilitéAttaque() {
    return Math.floor(Math.random() <= this.probaatt);
  }

  ProbabilitéMeurtAttaquant() {
    return Math.floor(Math.random() <= this.probamortdeg);
  }

  attack(Survivant) {
    if(this.ProbabilitéMeurt) {
      if(this.ProbabilitéAttaque){
        Jason.hp -= 10
        console.log("Le tueur", tueur.nomtue, "a perdu 10 hp !");
      } else {
        if(this.ProbabilitéMeurtAttaquant){
          Jason.hp -= 15
          nbrmorts++
          console.log("Le tueur", tueur.nomtue, "a perdu 15 hp !");
          console.log(Survivant.nomsurv, "est mort");

        }
      }
    } else {
  nbrmorts++
    }
}



//Création des charactères des survivants --------------------------------------------------------------------------------------------------------------------------------------


let Charactère = [
  ["Blonde", 0.8, 0.3, 0.1],
  ["Sportif", 0.4, 0.8, 0.5], 
  ["Nerd", 0.6, 0.3, 0.4], 
  ["Gros", 0.7, 0.2, 0.2], 
  ["Populaire", 0.2, 0.2, 0.7], 
  ["Délinquant", 0.7, 0.9, 0.8], 
];

//Création des survivants --------------------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i < 6; i++) {
  
  nomprov = NomsSurvivants[Math.floor(Math.random() * NomsSurvivants.length)];
  char = Charactère[Math.floor(Math.random() * Charactère.length)];
  Tabsurv.push(
    new survivant(nomprov, char[0], char[1], char[2], char[3])
  );

}

// Création du tueur --------------------------------------------------------------------------------------------------------------------------------------

let Jason = new tueur("Jason", 100)

console.log(nomprov);
console.log(char);
console.log(Tabsurv);
console.log(Jason.nomtue);

