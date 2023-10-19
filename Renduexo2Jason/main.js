//Classe du tueur -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class tueur {

  //Fonction constructor ----------------------------------------
  
  constructor(nomtue, hp) { //On crée les variables du nom et des hp du tueur
    this.nomtue = nomtue; //On attribut la variable à son paramètre
    this.hp = hp; //On attribut la variable à son paramètre
  }


  //Fonction attack ---------------------------------------------

  attack(Survivant) {

    console.log(this.nomtue, "attaque", Survivant.nomsurv, ",", Survivant.nomtype); //On indique que le tueur attaque quel survivant

    if (Probabilité <= Survivant.probamort) { // Si la probabilité tombe au premier niveau, le survivant meurt

      Tabmorts.push(Survivant.nomsurv); //On ajoute le nom du mort dans un tableau (Tabmorts)
      console.log("Le survivant", Survivant.nomsurv, ",", Survivant.nomtype, ", a été tué par", this.nomtue, "!"); //On indique qui a été tué et par qui
      Tabsurv.splice(randomattack, 1); //On supprime le survivant mort du tableau des survivants (Tabsurv)


    } else if (Probabilité > Survivant.probamort && Probabilité <= Survivant.probamort + Survivant.probaatt) { // Si la probabilité tombe au deuxième niveau, le survivant esquive

      console.log(Survivant.nomsurv, ",",Survivant.nomtype, ", a esquivé l'attaque de", this.nomtue, "et lui a infligé 10 points de dégâts"); //On indique qui a esquivé et les points de dégâts infligés
      this.hp -= 10; //Il inflige également 10 points de dégâts au tueur


    } else { // Si la probabilité tombe au dernier niveau (supérieur au deuxième), le survivant meurt mais inflige des dégâts

      console.log(Survivant.nomsurv, ",", Survivant.nomtype, ",", "a été tué par", this.nomtue, "mais lui a infligé 15 points de dégâts"); //On indique qui a été tué et par qui ainsi que les points de dégâts infligés
      Tabmorts.push(Survivant.nomsurv); //On ajoute le nom du mort dans un tableau (Tabmorts)
      Tabsurv.splice(randomattack, 1);//On supprime le survivant mort du tableau des survivants (Tabsurv)
      this.hp -= 15; //Il inflige également 15 points de dégâts au tueur

    }
  }
}


//Définitions des variables -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let Tabsurv = []; //Tableau des survivants
let nomprov = null; //Nom pour constituer le survivant avec son caractère aléatoire
let Tabmorts = []; //Tableau des morts
let Probabilité = null; //Probabilité aléatoire
let Survivantprovisoire = null; //Survivant aléatoire de chaque tour d'attaque
let randomattack = 0; //Nombre aléatoire pour le survivant attaqué aléatoirement


//Création des noms des survivants -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let NomsSurvivants = ["Alicia","Romain","André","Anissa","Jean-Marc","Stéphanie","Dominique","Jade","Benjamin","Olivia","Gracia","Lucas","Louis","Maxence","Taos","Sylvie","Evelyne","Thierry","Jeff","Jules","Annick","Yvonne","Constentin","Elon Musk","Brigitte","Charles","Cyril","Cédric","Monique","René"];


//Classe des survivants -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class survivant {

  //Fonction constructor ----------------------------------------

  constructor(nomsurv, nomtype, probamort, probaatt, probamortdeg) { //On crée les variables du nom, caractère et ses probabilités
    this.nomsurv = nomsurv; //On attribut la variable à son paramètre
    this.nomtype = nomtype; //On attribut la variable à son paramètre
    this.probamort = probamort; //On attribut la variable à son paramètre
    this.probaatt = probaatt; //On attribut la variable à son paramètre
    this.probamortdeg = probamortdeg; //On attribut la variable à son paramètre
  }
}


//Création des caractères des survivants -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let Caractère = [ 
  ["La Blonde", 0.2, 0.5, 0.3], //L'ordre suit celui de la classe survivant mais sans le nom qui sera choisit aléatoirement
  ["Le Sportif", 0.2, 0.4, 0.3],
  ["Le Nerd", 0.3, 0.4, 0.3],
  ["Le Gros", 0.3, 0.5, 0.2],
  ["Le Populaire", 0.1, 0.8, 0.1],
  ["Le Délinquant", 0.2, 0.6, 0.2],
];


//Création des survivants -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < 5; i++) { //On fait tourner les boucle 5 fois pour créer 5 survivants
  nomprov = NomsSurvivants[Math.floor(Math.random() * NomsSurvivants.length)]; //On choisit un prénom aléatoire
  char = Caractère[Math.floor(Math.random() * Caractère.length)]; //On choisit un caratère aléatoire
  Tabsurv.push(new survivant(nomprov, char[0], char[1], char[2], char[3])); //On réunit le prénom et le caractère en créant un survivant et on le met dans le tableau des survivants (Tabsurv)
}


// Création du tueur -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let Jason = new tueur("Jason", 100); //On lui attribut le nom Jason et 100 HP (On suit l'ordre de la classe tueur)


// Boucle d'attaque du tueur -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

while (Jason.hp > 0 && Tabmorts.length < 5) { //Tant que Jason n'est pas mort et que les survivants aussi, la boucle continue 

  Probabilité = Math.floor(Math.random() * 10) / 10; //On définit une probabilité
  randomattack = Math.floor(Math.random() * Tabsurv.length); //On définit le nombre aléatoire pour le survivant aléatoire
  Survivantprovisoire = Tabsurv[randomattack]; //On choisit un survivant aléatoire
  Jason.attack(Survivantprovisoire); //On appelle la fonction attack avec Jason comme tueur et le survivant aléatoire comme cible

}


// Condtion de fin de boucle -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


if (Jason.hp <= 0 && Tabsurv.length == 0) { //Si tout le monde est mort

  console.log("Tout le monde est mort dont", Jason.nomtue, "ainsi que les 5 survivants"); // On indique que tout le monde est mort


} else if (Jason.hp <= 0) { //En revanche, si uniquement Jason est mort

  console.log(Jason.nomtue,"n'a plus d'HP et a été tué par le(s)",Tabsurv.length,"survivant(s)!"); // On indique que les survivants ont réussi à tuer le tueur


} else { //Sinon, c'est que tous les survivants sont morts

  console.log("Tous les survivants ont été tués par", Jason.nomtue);// On indique que tous les survivants ont été tués par le tueur

}

// Affichage final des morts -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log("Les morts sont donc"); //Phrase introductive

let morts = Tabmorts.values(); //Récupération des morts dans la varaible morts

for (let mortsvalue of morts) { //Boucle d'affichage des morts

  console.log(mortsvalue); //Affichage des morts

}


if (Jason.hp <= 0) { //Si le tueur est mort, on ajoute son nom à la suite des morts

  console.log(Jason.nomtue); //Affichage du nom du tueur

}
