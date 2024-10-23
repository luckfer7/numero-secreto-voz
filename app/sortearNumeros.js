

const numeroAleatorio = gerarNumeroAleatorio();
const menorNumero = 1;
const maiorNumero = 100;

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 100 + 1);
}

const elementoDeMenorValor = document.getElementById('menor-valor');
elementoDeMenorValor.innerHTML = menorNumero;

const elementoDeMaiorValor = document.getElementById('maior-valor');
elementoDeMaiorValor.innerHTML = maiorNumero;
console.log(numeroAleatorio);

//const numeroEscolhido = document.querySelector('.box');
//numeroEscolhido.innerHTML = gerarNumeroAleatorio();

