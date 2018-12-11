const widget_altura = document.querySelector("#altura");
const widget_peso = document.querySelector("#peso");
const widget_imc = document.getElementById("imc");
const widget_classificacao = document.getElementById("classificacao");

function calcule_imc() {
    const peso = Number(widget_peso.value);
    const altura = Number(widget_altura.value);
    imc = Math.round(valor_imc(peso, altura) * 10) / 10;
    atualiza(imc);
}

function atualiza(imc) {
    if (imc) {
        widget_imc.innerText = imc;
        widget_classificacao.innerText = classificacao_imc(imc)
    } else {
        widget_imc.innerText = "";
        widget_classificacao.innerText = "";
    }
}

function valor_imc(peso, altura) {
    return peso / altura ** 2;
}

function classificacao_imc(imc) {
    if (imc < 18.5) {
        return "abaixo do peso"
    } else if (imc < 25) {
        return "peso normal"
    } else if (imc < 30) {
        return "sobrepeso"
    } else if (imc < 35) {
        return "obesidade grau i"
    } else if (imc < 40) {
        return "obesidade grau ii"
    } else {
        return "obesidade grau iii"
    }
}

setInterval(calcule_imc, 100);