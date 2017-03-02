// Saisie du prix hors taxe
var prixHT = Number(prompt("Entrez le prix hors taxe :"));
//calcul du prix TTC
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);
//Affichage du résultat
console.log("Le prix TTC est de " + prixTTC + " euros");