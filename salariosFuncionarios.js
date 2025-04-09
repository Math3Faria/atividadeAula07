let anosTrabalhados;
let salarioAtual;
let genero;

alert("Olá, precisamos reajustar o seu sálario de acordo com alguns fatores. Para prosseguir digite seu gênero");
genero = prompt("Digite F para feminino ou M para masculino");
if (genero === "F" || genero === "f") {
    salarioAtual = parseFloat(prompt("Digite qual o seu sálario atual: "));
    anosTrabalhados = parseInt(prompt("Agora diga a quantos anos está na empresa:  "));
    if (!isNaN(salarioAtual) && !isNaN(anosTrabalhados)) {;
        if ((anosTrabalhados) < 5) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.04}`);
        } else if (anosTrabalhados >= 5 && anosTrabalhados <= 10) {;
            alert(`Seu novo salario será de : ${salarioAtual * 1.07}`);
        } else if (anosTrabalhados >= 15 && anosTrabalhados <= 20) {;
            alert(`Seu novo salario será de : ${salarioAtual * 1.12}`);
        } else if (anosTrabalhados > 20);
            alert(`Seu novo salario será de : ${salarioAtual * 1.23}`);
    } else {
        alert("Você digitou incorretamente😭 digite seu salário com números, não letras, volte e digite corretamente");
    }
}
else if (genero === "M" || genero === "m") {
    salarioAtual = parseFloat(prompt("Digite qual o seu sálario atual: "));
    anosTrabalhados = parseInt(prompt("Agora diga a quantos anos está na empresa:  "));
    if (!isNaN(salarioAtual) && !isNaN(anosTrabalhados)) {
        if ((anosTrabalhados) < 5) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.03}`);
        } else if (anosTrabalhados >= 5 && anosTrabalhados <= 10) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.08}`);
        } else if (anosTrabalhados >= 15 && anosTrabalhados <= 20) {
            alert(`Seu novo salario será de : ${salarioAtual * 1.14}`);
        } else if (anosTrabalhados > 20);
            alert(`Seu novo salario será de : ${salarioAtual * 1.25}`);
    } else { alert("Você digitou incorretamente😭 digite seu salário com números, não letras, volte e digite corretamente") };
} else { alert("Você digitou incorretamente😭, volte e digite F para feminino ou M para masculino") };
