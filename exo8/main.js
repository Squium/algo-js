// Définition 
let student = {
  nom: "Helyot Jeff",
  favoriteFood: "Hamburger",
  city: "Paris",
}

let nbrtot = 0;

let Tab = Object.values(student);

// Addition des termes

Tab.forEach(nbr => {
  nbrtot += nbr.length
})

let result = null

//Pair ou Impair

if(nbrtot % 2) {
  result = "impair";
}
else {
  result = "pair";
}
console.log("Le résultat est", nbrtot, "et", result);