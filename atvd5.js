function imparPar () {
    let numero = [];


    numero = parseFloat(prompt ("Digite um número:"));


    if (numero % 2 == 0) {
        numero = numero += 1  
    } else {
        numero = numero -= 1
    }


    alert (numero)


}
