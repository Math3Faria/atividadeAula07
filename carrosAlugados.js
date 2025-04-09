let tipoCarro;
let kmsPercorrido;
let diasAlugado;

tipoCarro = prompt("Se o seu carro for popular digite P, caso for de luxo digite L: ");
if (tipoCarro == "P" || tipoCarro == "p") {
    diasAlugado = parseInt(prompt("Quantos dias você ficou com o carro?: "));
    kmsPercorrido = parseFloat(prompt("Quantos kms você percorreu?: "));
    if (!isNaN(diasAlugado) && !isNaN(kmsPercorrido)) {
        if ((kmsPercorrido) <= 100) {
            alert(`O valor total a ser pago será de: ${(90 * diasAlugado) + (0.2 * kmsPercorrido)}`);
        } else {
            alert(`O valor total a ser pago será de: ${(90 * diasAlugado) + (0.1 * kmsPercorrido)}`);
        }
    }else {
        alert("Você digitou incorretamente😭 digite seu salário com números, não letras, volte e digite corretamente");
    }
}
else if (tipoCarro == "L" || tipoCarro == "l") {
    diasAlugado = parseInt(prompt("Quantos dias você ficou com o carro?: "));
    kmsPercorrido = parseFloat(prompt("Quantos kms você percorreu?: "));
    if (!isNaN(diasAlugado) && !isNaN(kmsPercorrido)) {
        if ((kmsPercorrido) <= 200) {
            alert(`O valor total a ser pago será de: ${(150 * diasAlugado) + (0.3 * kmsPercorrido)}`);
        } else {
            alert(`O valor total a ser pago será de: ${(150 * diasAlugado) + (0.25 * kmsPercorrido)}`);
        }
    }else {
        alert("Você digitou incorretamente😭 digite quantos KMS/Quantos dias com números, não letras, volte e digite corretamente");
    }
} else { alert("Tente novamente e digite somente uma das duas opções: (L)para luxo OU (P) para Popuplar") };
