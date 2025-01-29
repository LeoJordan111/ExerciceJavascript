
// Exercice 7

    //Création d'une fonction
    // function checkPassword(string) {
    //         if (string.length < 9) {
    //             console.log("Le MdP est trop court, il doit comporter plus de 9 caractères !!")
    //         }
    //         else if ((string.includes('a'))) {
    //             console.log("Il n'y a pas le caractère @")
    //         } else {
    //             console.log("Votre MdP a été enregistré")
    //         }

    //     return result
    // }


    string = 'Coucou@123123'

    if (string.length < 9) {
                     console.log("Le MdP est trop court, il doit comporter plus de 9 caractères !!")
                }
                 else if ((!string.includes('@'))) {
                     console.log("Il n'y a pas le caractère @")
                 } else {
                     console.log("Votre MdP a été enregistré")
                 }
    console.log(string.includes('@'))
    console.log(string)