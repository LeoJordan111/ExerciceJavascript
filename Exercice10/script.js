
// Exercice 10

// faire une fonction afin d'inverser une chaine de caractère.

    str = 'chaine'
    
    function reverseString(str) {
        return str.split('').reverse().join('');
    }                 
    console.log(reverseString(str))