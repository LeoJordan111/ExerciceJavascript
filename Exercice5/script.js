
// Exercice 5

//Création des variables
let  array = [1, 2, 3, 3, 3, 4, 5, 5]
let  filterarray = []
console.log(array)

// Boucle for pour parcourir l'ensemble des valeurs du tableau
    for (i=0; i<array.length; i++) {
        console.log(array[i])

        if (filterarray.includes(array[i]) === false) {
            filterarray.push(array[i]);        
            console.log(filterarray);
            }
        }
    console.log(filterarray)