
//função de mudar de tela

function login() {
  window.location.href = 'pages/home.html'
}

function logout() {
  window.location.href = '../index.html'
}

function navigateToListPage() { 
  window.location.href = 'list.html'
}

function navigateToDevolutionPage() { 
  window.location.href = 'devolution.html'
}


//função de descrição dos materiais

document.addEventListener('DOMContentLoaded', function() {
  const tabelaMateriais = document.getElementById('tabela-materiais');
  const descricaoMaterial = document.querySelector('.descricao-material');
  let descricaoVisivel = false;

  tabelaMateriais.addEventListener('click', function(event) {
    const target = event.target;

    // Verifica se o clique foi em uma célula da tabela
    if (target.tagName === 'TD') {
      const linhaSelecionada = target.parentNode;

      // Verifica se a descrição está visível para a linha selecionada
      if (linhaSelecionada.classList.contains('selected-row') && descricaoVisivel) {
        // Se a descrição já está visível, oculta a descrição e remove a classe 'selected-row'
        descricaoVisivel = false;
        descricaoMaterial.innerHTML = '';
        linhaSelecionada.classList.remove('selected-row');
      } else {
        // Se a descrição não está visível, exibe a descrição e adiciona a classe 'selected-row'
        descricaoVisivel = true;
        linhaSelecionada.classList.add('selected-row');

        const descricao = linhaSelecionada.dataset.description;
        const imagens = linhaSelecionada.dataset.imagem.split(',');

        let descricaoHTML = '<h3>Descrição do material:</h3>' + descricao;

        imagens.forEach(function(imagemURL) {
          const imagem = document.createElement('img');
          imagem.src = imagemURL;
          imagem.classList.add('img');
          descricaoHTML += '<img src="' + imagemURL + '" class="img" />';
        });

        descricaoMaterial.innerHTML = descricaoHTML;
      }
    }
  });
});


//função de pesquisar por materiais

document.addEventListener('DOMContentLoaded', function() {
  const tabelaMateriais = document.getElementById('tabela-materiais');
  const inputPesquisa = document.getElementById('input-pesquisa');

  inputPesquisa.addEventListener('input', function(event) {
    const termoPesquisa = event.target.value.toLowerCase();
    const linhasTabela = tabelaMateriais.getElementsByTagName('tr');

    for (let i = 0; i < linhasTabela.length; i++) {
      const colunas = linhasTabela[i].getElementsByTagName('td');
      let correspondenciaEncontrada = false;

      for (let j = 0; j < colunas.length; j++) {
        const textoColuna = colunas[j].innerText.toLowerCase();
        const palavrasPesquisa = termoPesquisa.split('*');

        let todasPalavrasEncontradas = true;

        for (let k = 0; k < palavrasPesquisa.length; k++) {
          const palavra = palavrasPesquisa[k].trim();

          if (palavra !== '' && !textoColuna.includes(palavra)) {
            todasPalavrasEncontradas = false;
            break;
          }
        }

        if (todasPalavrasEncontradas) {
          correspondenciaEncontrada = true;
          break;
        }
      }

      if (correspondenciaEncontrada) {
        linhasTabela[i].classList.remove('hide-row');
      } else {
        linhasTabela[i].classList.add('hide-row');
      }
    }
  });

  tabelaMateriais.addEventListener('click', function(event) {
    const target = event.target;

    // Verifica se o clique foi em uma célula da tabela
    if (target.tagName === 'TD') {
      const linhaSelecionada = target.parentNode;

      // Remove a classe 'selected-row' de todas as linhas
      const todasLinhas = tabelaMateriais.getElementsByTagName('tr');
      for (let i = 0; i < todasLinhas.length; i++) {
        todasLinhas[i].classList.remove('selected-row');
      }

      // Adiciona a classe 'selected-row' na linha selecionada
      linhaSelecionada.classList.add('selected-row');
    }
  });
});


//favoritos

