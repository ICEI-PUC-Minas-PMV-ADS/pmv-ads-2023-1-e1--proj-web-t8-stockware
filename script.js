///////////////////////////////// FUNÇÃO DE MUDAR DE TELA (MENU LATERAL) ////////////////////////////////////

function login() {
  window.location.href = 'pages/home.html'
}

function logout() {
  window.location.href = '../login.html'
}

function navigateToAdminPage() {
  window.location.href = 'home-admin.html'
}

function navigateToHome() {
  console.log('star')
  window.location.href = 'home.html'
}

function navigateToProductRegistration() {
  window.location.href = 'product-registration.html'
}

function navigateToListPage() {
  window.location.href = 'list.html'
}

function navigateToDevolutionPage() {
  window.location.href = 'devolution.html'
}

//const menu = document.querySelector('.main');
//const menuBtn = document.querySelector('.btn-sidebar');
//menuBtn.addEventListener('click', () => {
//menu.classList.toggle('active');
//});

function toggleModal(tableRow) {
  const dialog = document.getElementById('list-modal')
  const description = document.getElementById('description')
  const img = document.getElementById('product-img')
  description.innerText = tableRow.getAttribute('data-description')
  img.src = tableRow.getAttribute('data-imagem')
  dialog.showModal()
}

///////////////////////////////// FUNÇÃO DE PESQUISAR POR MATERIAIS ////////////////////////////////////

function toggleModal(element) {
  const description = element.getAttribute('data-description');
  const imageSrc = element.getAttribute('data-imagem');

  const descriptionElement = document.getElementById('description');
  const imageElement = document.getElementById('product-img');

  descriptionElement.textContent = description;
  descriptionElement.style.wordWrap = "break-word"; // Adiciona a propriedade word-wrap

  imageElement.src = imageSrc;

  const modal = document.getElementById('list-modal');
  modal.showModal();
}


document.addEventListener('DOMContentLoaded', function () {
  const tabelaMateriais = document.getElementById('tabela-materiais');
  const inputPesquisa = document.getElementById('input-pesquisa');

  inputPesquisa.addEventListener('input', function (event) {
    const termoPesquisa = event.target.value.toLowerCase();
    const linhasTabela = tabelaMateriais.getElementsByTagName('tr');

    for (let i = 1; i < linhasTabela.length; i++) { // Inicia a partir do índice 1 para excluir o cabeçalho
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

  tabelaMateriais.addEventListener('click', function (event) {
    const target = event.target

    // Verifica se o clique foi em uma célula da tabela
    if (target.tagName === 'TD') {
      const linhaSelecionada = target.parentNode

      // Remove a classe 'selected-row' de todas as linhas
      const todasLinhas = tabelaMateriais.getElementsByTagName('tr')
      for (let i = 0; i < todasLinhas.length; i++) {
        todasLinhas[i].classList.remove('selected-row')
      }

      // Adiciona a classe 'selected-row' na linha selecionada
      linhaSelecionada.classList.add('selected-row')
    }
  });

  // Obtém o elemento do botão de fechar
  var fecharDescricaoBtn = document.getElementById('fechar_descricao');

  // Obtém o elemento do diálogo
  var dialogModal = document.getElementById('list-modal');

  // Verifica se os elementos foram encontrados corretamente
  if (fecharDescricaoBtn && dialogModal) {
    // Adiciona um evento de clique ao botão de fechar
    fecharDescricaoBtn.addEventListener('click', function () {
      // Fecha o diálogo
      dialogModal.close();
    });
  }
});


///////////////////////// ADICIONAR AO CARRINHO ////////////////////////////////

function adicionarCarrinho() {
  alert('O item foi adicionado ao carrinho!')
  window.location.href = 'list.html'
}
///////////////////////////////////////

///////////////  CADASTRO DE PRODUTOS ////////////////////

function cadastrarProduto() {
  console.log('tty')
  // Obtendo os valores dos campos do formulário
  let nome = document.getElementById('nome').value
  let codigo = document.getElementById('codigo').value
  let quantidade = document.getElementById('quantidade').value
  let tipo = document.getElementById('tipo').value
  let preco = document.getElementById('preco').value
  let descricao = document.getElementById('descricao').value
  let imagem = document.getElementById('imagem').value

  // Validando os campos
  if (
    nome === '' ||
    codigo === '' ||
    quantidade === '' ||
    tipo === '' ||
    preco === '' ||
    descricao === '' ||
    imagem === ''
  ) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  // Criando um objeto JSON com os dados do produto
  let produto = {
    nome: nome,
    codigo: codigo,
    quantidade: quantidade,
    tipo: tipo,
    preco: preco,
    descricao: descricao,
    imagem: imagem
  }

  // Verificando se já existem produtos armazenados em local storage
  let produtosArmazenados = localStorage.getItem('produtos')
  let produtos = []

  if (produtosArmazenados) {
    // Se existirem produtos armazenados, converte a string JSON para um array de objetos
    produtos = JSON.parse(produtosArmazenados)
  }

  // Adicionando o novo produto ao array
  produtos.push(produto)

  // Armazenando o array atualizado em local storage
  localStorage.setItem('produtos', JSON.stringify(produtos))

  // Limpa os campos do formulário após a validação
  document.getElementById('nome').value = ''
  document.getElementById('codigo').value = ''
  document.getElementById('quantidade').value = ''
  document.getElementById('tipo').value = ''
  document.getElementById('preco').value = ''
  document.getElementById('descricao').value = ''
  document.getElementById('imagem').value = ''

  alert('Cadastro de produto realizado com sucesso!')
}

function atualizarListaProdutos() {
  console.log('hjk')
  let produtosArmazenados = localStorage.getItem('produtos')
  let produtos = []

  if (produtosArmazenados) {
    produtos = JSON.parse(produtosArmazenados)
  }

  let tabelaBody = document.getElementById('produtos-lista');

  // Limpa o conteúdo atual da tabela
  tabelaBody.innerHTML = '';

  // Percorre o array de produtos e adiciona cada um na tabela
  produtos.forEach(function (produto) {
    let novaLinha = document.createElement('tr');

    novaLinha.onclick = () => toggleModal(novaLinha);
    novaLinha.setAttribute('data-imagem', produto.imagem);
    novaLinha.setAttribute('data-description', produto.descricao);

    novaLinha.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.codigo}</td>
      <td>${produto.quantidade}</td>
      <td>${produto.tipo}</td>
      <td>R$ ${produto.preco}</td>
      <td>${produto.local}</td>
      <td>
        <span class="favoritos_list"><img src="../img/heart.png" alt=""></span>
      </td>
    `
    tabelaBody.appendChild(novaLinha)
  })
}

// Chama a função para atualizar a lista de produtos ao carregar a página
atualizarListaProdutos();

/////////////// FECHAR CAIXA DE DIALOGO DA LISTA DE MATERIAIS /////////////////

document.addEventListener('DOMContentLoaded', function () {
  // Obtém o elemento do botão de fechar
  var fecharDescricaoBtn = document.getElementById('fechar_descricao');

  // Obtém o elemento do diálogo
  var dialogModal = document.getElementById('list-modal');

  // Verifica se os elementos foram encontrados corretamente
  if (fecharDescricaoBtn && dialogModal) {
    // Adiciona um evento de clique ao botão de fechar
    fecharDescricaoBtn.addEventListener('click', function () {
      // Fecha o diálogo
      dialogModal.close();
    });
  }
});



