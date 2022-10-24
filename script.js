const calcular = document.querySelector("#calcular")

// Criar a var sem parâmetros
function imc () {

    // Atribuindo as variáveis 
    const nome = document.querySelector("#nome").value
    const altura = document.querySelector("#altura").value
    // Podemos pegar diretamente o value do input
    const peso = document.querySelector("#peso").value
    const resultado = document.querySelector("#resultado")
    

    // Se for diferente de vazio ele realiza
    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        }  else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!'
        } else if (valorIMC < 30) {
            classificacao = 'Você está um pouco acima do peso.'
        } else if (valorIMC < 35){
            classificacao = "Você está com obesidade grau I"
        } else if (valorIMC < 40){
            classificacao = "Você está com obesidade grau II"
        } else {
            classificacao = "Você está com obesidade grau III"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {

        // Inserindo o conteúdo dentro da DIV
        resultado.textContent = 'Preencha todos os campos'

    }

    // O ideal seria uma função não realizar todas as etapas: calcular, validar exibir os resultados

}

// Adicionando o evento de click no botão 
calcular.addEventListener('click', imc)