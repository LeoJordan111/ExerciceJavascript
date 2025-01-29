
// Exercice 3

    // Etat de l'eau selon sa température
    let temperature = 50
    if (temperature < 0) {
        console.log("Solide");
    } else if (temperature > 100) {
        console.log("gaz");
    } else {
        console.log("liquide");
    }

    function etat(temp) {
        etatEau = ''
        if (temp < 0) {
            etatEau = "Solide";
        } else if (temp > 100) {
            etatEau = "gaz";
        } else {
            etatEau = "liquide";
        }
        return etatEau
    }   

    console.log(etat(50));
    