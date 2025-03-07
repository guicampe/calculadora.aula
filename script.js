// após usuário selecionar, a opção padrão desaparece
function removerSelecione() {
    let select = document.querySelector('#operacoes');
    let opcaoSelecione = select.querySelector('option[value="preenchimento"]');

    if (select.value !== "preenchimento") {
        opcaoSelecione.remove() // responsável por eliminar a opção
    }
}


function calculo() {
    
    // obtém os valores em string
    let primeiroValor = document.querySelector('#valor1').value; 
    let segundoValor = document.querySelector('#valor2').value;

    // transforma em números com ponto flutuante
    primeiroValor = parseFloat(primeiroValor);
    segundoValor = parseFloat(segundoValor);

    // valida se os valores são números válidos
    if (isNaN(primeiroValor) || isNaN(segundoValor)) {
        document.querySelector('#resposta').innerHTML = 'Por favor insira números válidos em ambos os campos.'
        return;
    } 

    let soma = primeiroValor + segundoValor;
    let subtracao = primeiroValor - segundoValor;
    let vezes = primeiroValor * segundoValor;
    let divisao = (segundoValor !== 0) ? (primeiroValor / segundoValor) : null; // verifica se o segundo valor não é zero, evitando erro de divisão

    // ajuste na lógica da divisão
    if (divisao !== null && Number.isInteger(divisao)) {
        divisao = Math.round(divisao); // arredonda resultados inteiros
    } else if (divisao !== null) {
        divisao = divisao.toFixed(2); // exibe duas casas decimais
    }
    
    let operacao = document.querySelector('#operacoes').value;
    let resultado = document.querySelector('#resposta');

    if (operacao === 'mais') {
        resultado.innerHTML = `Resultado da adição: ${soma}`;
    } else if (operacao === 'menos') {
        resultado.innerHTML = `Resultado da subtração: ${subtracao}`;
    } else if (operacao === 'vezes') {
        resultado.innerHTML = `Resultado da multiplicação: ${vezes}`;
    } else if (operacao === 'divisao') {
        if (divisao === null) {
            resultado.innerHTML = 'Não é possível dividir por zero!'
        } else {
            resultado.innerHTML = `Resultado da divisão: ${divisao}`;
        }
    } else {
        resultado.innerHTML = 'Selecione uma operação válida';
    }
}

// função para limpar os campos de entrada e a resposta
function clean() {

    // restaurar a opção selecione
    let select = document.querySelector('#operacoes');
    let opcaoSelecione = select.querySelector('option[value = "preenchimento"]');
    if (!opcaoSelecione) {
        let novaOpcao = document.createElement('option');
        novaOpcao.value = 'preenchimento';
        novaOpcao.textContent = 'Selecione...';
        novaOpcao.disabled = true;
        novaOpcao.selected = true;
        select.insertBefore(novaOpcao, select.firstChild);
    }
    
    document.querySelector('#valor1').value = '';
    document.querySelector('#valor2').value = '';
    document.querySelector('#operacoes').value = 'preenchimento';
    document.querySelector('#resposta').innerHTML = '';
}