
// Exercice 12

// faire une fonction pour compter les points au scrabble


function points(str) {
    array = str.toLowerCase(str.split(''))
    totalPoints = 0
    console.log(array)

    // faire un tableau pour chaque catégorie de points

    for (const el of array) {
        if (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u' || el == 'l' || el == 'n' || el == 'r' || el == 's' || el == 't') {
            totalPoints = totalPoints + 1
        } else if (el == 'd' || el == 'g') {
            totalPoints = totalPoints + 2
        } else if (el == 'b' || el == 'c' || el == 'm' || el == 'p') {
            totalPoints = totalPoints + 3
        } else if (el == 'f' || el == 'h' || el == 'v' || el == 'w' || el == 'y') {
            totalPoints = totalPoints + 4
        } else if (el == 'k') {
            totalPoints = totalPoints + 5
        } else if (el == 'j' || el == 'x') {
            totalPoints = totalPoints + 8
        } else {
            totalPoints = totalPoints + 10
        }
        
    } return totalPoints
}   

console.log(points('Geoline'))
console.log(points('Corentin'))
console.log(points('Maxime'))


