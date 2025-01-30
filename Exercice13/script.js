
// Exercice 13

// faire une fonction pour décrémenter un nombre

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decompte(nbre) {
     nbrePassage = 0   
    // console.log(nbreOrigin) 

    for (i=nbre; i>0; i--) {
        nbretest = entierAleatoire(1, 50)
        // console.log(nbretest)
        i = i - nbretest + 1 
        nbrePassage = nbrePassage + 1
         
    } return nbrePassage
}
    console.log("La boucle s'est répétée, " + decompte(55   ) + " fois.")
