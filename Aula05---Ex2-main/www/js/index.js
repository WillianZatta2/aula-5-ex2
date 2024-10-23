document.addEventListener('deviceready', onLoad, false);


function onLoad(){

    operacaoAleatoria();
}

let resultadoCorreto;


function operacaoAleatoria() {

    const operadores = ['+', '-', '*', '/'];

    const operador = operadores[Math.floor(Math.random() * operadores.length)];

    document.getElementById('mensagem').innerHTML = " "
    document.getElementById('resultado').value = ""


    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;

    if (operador === '/') {
        while (num2 === 0) {
            num2 = Math.floor(Math.random() * 9) + 1;
        }
    }

    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = (num1 / num2).toFixed(2);
            break;
    }

    document.getElementById("operacao").textContent = `Resolva: ${num1} ${operador} ${num2}` 
    resultadoCorreto = resultado
}


function verificarResposta() {
    const respostaUsuario = parseFloat(document.getElementById('resultado').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(respostaUsuario)) {
        mensagem.innerText = 'Por favor, insira um número válido.';
        navigator.vibrate(1000)
    } else if (respostaUsuario === resultadoCorreto) {
        navigator.vibrate(2000)
        mensagem.innerText = 'Resposta correta!';
        operacaoAleatoria();
    } else {
        mensagem.innerText = 'Resposta incorreta. Tente novamente.';
        navigator.vibrate(1000)
    }
}