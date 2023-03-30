let btnvai = document.getElementById("btnVai");
let numero  ;
let scegli ;
let sceltanumero = document.getElementById("numero");
let numeroCPU ;

function confermaNumero (numero) {

    if (numero > 5) {
        alert ("ti avevo detto non piu di 5!!" + " " + numero + " " + "è" + " " + (numero - 5) + " " +"in più di 5...")
        document.getElementById("numero").value = 5

    } else if (numero == 0) {
        alert ("ho capito che tra 1 e 5 è nosioso... ma 0 è inappropriato!")
        document.getElementById("numero").value = 1
    } else if (numero <= -273) {
        alert ("siamo" + " " + (-273 - numero)+ " " + "gradi oltre lo 0 assoluto,ATTENTEZIONE GLI ATOMI SI SFALDANO...ADIOS!")
        document.getElementById("numero").value = 1
    }
    else if (numero < 1) {
        alert ("esagerato"+ " " + numero + "! fa freddo sotto lo 0?")
        document.getElementById("numero").value = 1
    }  
}

function casualNumberCPU (min,max) {

    return Math.floor(Math.random(min) * max)+1
}

function gioco (x,y,scelta) {

    let risultato = x + y

    if ( ((risultato % 2) == 0  && scelta == "pari") 
        || ((risultato % 2) !== 0  && scelta == "dispari")) {
        return alert("hai scelto il numero:" + " " + x  + " " + ",la CPU ha scelto il numero:" + y + " " + "e il totale é:"
             + " " + risultato + " " + "(essendo" + " " + scelta + ")" + " " + "HAI VINTO!") 
    } else {
        return alert("hai scelto il numero:" + " " + x  + " " + ",la CPU ha scelto il numero:" + y + " " + "e il totale é:"
             + " " + risultato + " " + "(non essendo" + " " + scelta + ")" + " " + "HAI PERSO!")
    }

}

sceltanumero.addEventListener("change", function() {

    numero = parseInt(document.getElementById("numero").value)
    confermaNumero(numero);
  
})





btnvai.addEventListener("click", function() {

    numero = parseInt(document.getElementById("numero").value)
    scegli = document.getElementById("scelta").value
    numeroCPU = casualNumberCPU(1,5)
    gioco (numero,numeroCPU,scegli)
})
