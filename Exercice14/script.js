
// Exercice 14

// faire une fonction pour décrémenter un nombre

function jetde(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function petitcochon() {
     nbreLance = 0
     cochon = ''
     nbrePattes = 0
     nbreYeux = 0
     nbreQueue = 0
     nbreOreillles = 0
    

    

    while (!testcochon()) {  
            resultde = jetde(1, 6)
            console.log(resultde) 
                if (resultde === 1 || resultde === 3 || resultde === 5) {
                    // rajout d'une patte
                    if (nbrePattes < 4) {
                        nbrePattes = nbrePattes + 1
                    }
                    
                }
                else if (resultde === 2) {
                    // rajout d'un oeil
                    if (nbreYeux < 2) {
                        nbreYeux = nbreYeux + 1
                    }
                }
                else if (resultde === 4) {
                    // rajout d'une queue
                    if (nbreQueue < 1) {
                        nbreQueue = nbreQueue + 1
                    }
                }
                else if (resultde = 6) {
                    // rajout d'une oreille
                    if (nbreOreillles < 2) {
                        nbreOreillles = nbreOreillles + 1
                    }
                }
            nbreLance = nbreLance + 1
            console.log("Votre cochon a " + nbrePattes + " pattes," + nbreYeux + " yeux," + nbreQueue + " queue et "+ nbreOreillles + " oreilles.")
 }

    console.log("Votre cochon est complet, il a " + nbrePattes + " pattes," + nbreYeux + " yeux," + nbreQueue + " queue et "+ nbreOreillles + " oreilles.")
    console.log("Vous avez fait " + nbreLance + " lancés.")

    function testcochon() {
        if(nbrePattes === 4 && nbreYeux === 2 && nbreQueue === 1 && nbreOreillles === 2){
            return true
        } else {
            return false
        }
    }