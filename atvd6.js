function balançoMawer() {
    let contador;
    let saldo = 0;
    let prezuizo = 0;
    let situacaoFinal = 0;


    for (contador=1; contador <12; contador++) {
        lucro += parseFloat(prompt("Digite o ganho do mês "+ i));
        prejuizo +=  parseFloat(prompt("Digite o gasto do mês "+ i));
    }


    situacaoFinal = lucro - prejuizo;


    if (situacaoFinal > 0) {
        alert ("Sua empresa lucrou " + situacaoFinal)
    }


    if (situacaoFinal < 0) {
        alert ("Sua empresa teve prejuízo" + situacaoFinal)
    }
}
