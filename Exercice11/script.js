
// Exercice 10

// faire une fonction pour vérifier si une chaîne de caractères est un "Pangram"
        //str = 'abcdefghijklmnopqrstuvwxyz'
        str = 'portez ce vieux whisky au juge blond qui fume'
        //str = 'etez'
        arrayAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        pangram = true
        
        arrayChaine = str.split('')

            for (i=0; i<arrayAlphabet.length; i++) {
                if (!str.includes(arrayAlphabet[i])) {
                    pangram = false
                } 
            }

        console.log(pangram)





