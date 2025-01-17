
// Exercice 5

//Création des variables
let  array = [1, 2, 3, 3, 3, 4, 5, 5]

// Boucle for pour parcourir l'ensemble des valeurs du tableau
    for (i=1; i<array.length; i++) {
        let position = array.indexOf(array[i]);
        if (array[i-1] === array[i]) {
            array.splice(position, 1);
        }
    }
    console.log(array)