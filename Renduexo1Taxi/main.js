class personnage {

  constructor(nom, santé) { //On crée les variables du nom et des hp du tueur
    this.nom = nom; //On attribut la variable à son paramètre
    this.santé = santé; //On attribut la variable à son paramètre
  }

}



let Perso = new personnage("Jeff", 10); 


let Music = ["Anissa - Wejdene", "River - Bishop Briggs", "Midnight Dreams - Ellie Goulding", "Carnage - TFT", "good 4 u - Olivia Rodrigo"];
let nbrfeux = 30; 
let nbrtaxi = 0
let randommusic = 0
let musicprovisoire = null 

while (nbrfeux > 0 && Perso.santé > 0) {
  randommusic = Math.floor(Math.random() * Music.length);
  musicprovisoire = Music[randommusic]
  console.log(Perso.nom, "rencontre un feu rouge");
  console.log("La musique est maintenant", musicprovisoire);
  if (musicprovisoire === Music[0]) {
    Perso.santé -= 1;
    nbrfeux -= 1;
    nbrtaxi += 1;
    console.log(Perso.nom, "déteste cette musique. Sa santé mentale a diminué et il décide de changer de taxi");
    console.log("Il reste donc", nbrfeux, "feu(x) rouge(s) jusqu'à chez", Perso.nom);
    console.log("Sa santé mentale est de", Perso.santé);
    
  } else {
    nbrfeux -= 1
    console.log(Perso.nom, "aime beaucoup cette musique !");
    console.log("Il reste donc", nbrfeux, "feu(x) rouge(s) jusqu'à chez", Perso.nom);
    console.log("Sa santé mentale est de", Perso.santé);
  }

}

if (nbrfeux == 0) {
  console.log("Il ne reste plus aucun feu jusqu'à chez", Perso.nom);
  console.log(Perso.nom, "est enfin arrivé chez lui ");
  console.log("Sa santé mentale est de", Perso.santé);
  console.log("Il a du prendre", nbrtaxi, "taxis pour rentrer");
} else {
  console.log("EXPLOSION !!!");
  console.log(Perso.nom, "ne rentrera jamais chez lui car sa santé mentale est de", Perso.santé); 
}