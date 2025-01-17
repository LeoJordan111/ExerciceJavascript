
// Exercice 1

//Création des variables
    let  array = [8, 15, 12, 11, 9]
    let length = array.length

//Création de la boucle
    if (length !== 0) {
        total = 0
        for (i=0; i<array.length; i++) {
            total = total + array[i]
        }
        moy = total / array.length
        console.log(moy)
    } else {
        console.log("le tableau n'a pas de valeur")
    }