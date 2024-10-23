function verificarSeOChutePossuiUmValorValido(chute) {
    const numero = +chute; //transforma para inteiro

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div>Valor inválido</div>'
       return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML = `<div>Valor inválido: o número secreto precisa estar entre ${menorNumero} e ${maiorNumero}</div>`

        return
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})