let btnvai = document.getElementById("btnVai");
let numero  ;
let scegli ;
let sceltanumero = document.getElementById("numero");

sceltanumero.addEventListener("change", function() {
    numero = parseInt(document.getElementById("numero").value)
    console.log(numero)
    if (numero > 5) {
        alert ("ti avevo detto non piu di 5!!")
        document.getElementById("numero").value = 5

    } else if (numero == 0) {
        alert ("ho capito che tra 1 e 5 è nosioso... ma 0 è inappropriato!")
        document.getElementById("numero").value = 1
    } 
    else if (numero < 1) {
        alert ("esagerato! fa freddo sotto lo 0?")
        document.getElementById("numero").value = 1
    }    
})



btnvai.addEventListener("click", function() {

    numero = parseInt(document.getElementById("numero").value)
    scegli = document.getElementById("scelta").value


 

 console.log(numero, scegli)
})
