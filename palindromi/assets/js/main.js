let bottone = document.getElementById("btnVai")

//funziona per avere la parola al contrario
function getPalindromo(parola) {
    let parolaPalindroma = '';
    for (i = (parola.length - 1); i >= 0; i--){
        parolaPalindroma += parola[i];
        
    }

    return parolaPalindroma
}

//funzione per capire se parola è uguale a parola al contrario
function isPalindromo (parola){
    return getPalindromo(parola) === parola
}

bottone.addEventListener("click", function(){
    let parola = document.getElementById("parola").value
    console.log (parola)

    //se parola al contrario è uguale a parola...
    if(isPalindromo(parola)) {
        alert(parola + " " + "è palindromo")
    }else {
        alert ( parola + " " + "non è palindromo perchè il suo contrario è:" +  " "+ getPalindromo(parola)+ "!")
    }




})