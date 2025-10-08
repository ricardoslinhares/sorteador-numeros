function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (de >= ate) {
    alert("'De' deve ser menor que 'Até'. Por favor, insira os valores novamente.");
    return;
  }

  if (quantidade > ate - de + 1) {
    alert('A quantidade de números a serem sorteados é maior do que o intervalo disponível. Por favor, insira valores válidos.');
    return;
  }

  let sorteados = [];
  let numero;

  while (sorteados.length < quantidade) {
    numero = obterNumeroAleatorio(de, ate);
    if (!sorteados.includes(numero)) {
      sorteados.push(numero);
    }
  }
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}.</label>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}
