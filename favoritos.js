
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
function navigateFavoritePage() {
  window.location.href = 'favoritos.html'
}
function navigateCartPage() {
  window.location.href = 'cart-page.html'
}

//////////////////////// MENU LATERAL ///////////////////////////////////

const menuSize = '350px'
let open = false

if (document.querySelector('.img-menu')) {
  console.log('teste')
  document.querySelector('.img-menu').addEventListener('click', () => {
    open = !open
    toggleMenu()
  })
}

if (document.querySelector('#btnClose')) {
  document.querySelector('#btnClose').addEventListener('click', () => {
    open = false
    toggleMenu()
  })
}

function toggleMenu() {
  if (open) {
    document.querySelector('.main-menu-list').style.marginLeft = 0
    return
  }
  document.querySelector('.main-menu-list').style.marginLeft = `-${menuSize}`
}

///////////////////////////////  ADD AOS FAVORITOS /////////////////////

function adicionarFavoritos() {
  console.log('teste');
  // Recupera os dados do produto selecionado
  const linhaSelecionada = document.querySelector('.selected-row');
  const nome = linhaSelecionada.cells[0].textContent;
  const codigo = linhaSelecionada.cells[1].textContent;
  const quantidade = linhaSelecionada.cells[2].textContent;
  const tipo = linhaSelecionada.cells[3].textContent;
  const preco = linhaSelecionada.cells[4].textContent;
  const local = linhaSelecionada.cells[5].textContent;
  const descricao = linhaSelecionada.getAttribute('data-description');

  // Cria um objeto com os dados do produto
  const produto = {
    nome: nome,
    codigo: codigo,
    quantidade: quantidade,
    tipo: tipo,
    preco: preco,
    local: local,
    descricao: descricao
  };

  // Verifica se já existem produtos nos favoritos
  let favoritos = localStorage.getItem('favoritos');
  if (!favoritos) {
    // Se não existir, cria um novo array de favoritos com o produto atual
    favoritos = [produto];
  } else {
    // Se existir, converte o array de favoritos de JSON para um array de objetos
    favoritos = JSON.parse(favoritos);

    // Verifica se o material já existe nos favoritos
    const materialExistente = favoritos.find(
      (item) => item.codigo === produto.codigo
    );

    if (materialExistente) {
      alert('O item já está nos favoritos!');
      return; // Interrompe a execução da função
    }

    // Adiciona o produto atual ao array de favoritos
    favoritos.push(produto);
  }

  // Armazena o array de favoritos atualizado no localStorage
  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  alert('O item foi adicionado aos favoritos!');
}


///////////////////// EXIBIR DESCRIÇÃO DO MATERIAL /////////////////////////
function exibirDescricao(descricao, caminhoImagem) {
  const dialog = document.getElementById('list-modal');
  const description = document.getElementById('description');
  const img = document.getElementById('product-img');
  const cartAddDiv = document.querySelector('.cart-add');

  description.innerText = descricao;
  img.src = caminhoImagem;

  // Obtém a célula clicada
  const clickedCell = event.target;
  
  // Verifica se a célula pertence às colunas "QTD" ou "Ação"
  if (clickedCell.cellIndex === 6) {
    return; // Não exibe a descrição se clicar nessas células
  }
  
  dialog.showModal();

  cartAddDiv.addEventListener('click', adicionarCarrinho);
}


/////////////// FECHAR CAIXA DE DESCRIÇÃO DE MATERIAIS /////////////////


document.addEventListener('DOMContentLoaded', function () {
  // Obtém os elementos dos botões de fechar
  var fecharDescricaoBtns = document.getElementsByClassName('btn_fechar_descricao');
  var fecharDescricaoOkBtns = document.getElementsByClassName('btn_fechar_descricao_ok');

  // Obtém o elemento do diálogo
  var dialogModal = document.getElementById('list-modal');

  // Verifica se os elementos foram encontrados corretamente
  if (fecharDescricaoBtns.length > 0 && fecharDescricaoOkBtns.length > 0 && dialogModal) {
    // Itera sobre os botões de fechar
    for (var i = 0; i < fecharDescricaoBtns.length; i++) {
      var fecharDescricaoBtn = fecharDescricaoBtns[i];
      
      // Adiciona um evento de clique a cada botão de fechar
      fecharDescricaoBtn.addEventListener('click', function () {
        // Fecha o diálogo
        dialogModal.close();
      });
    }

    for (var j = 0; j < fecharDescricaoOkBtns.length; j++) {
      var fecharDescricaoOkBtn = fecharDescricaoOkBtns[j];
      
      // Adiciona um evento de clique a cada botão de fechar "ok"
      fecharDescricaoOkBtn.addEventListener('click', function () {
        // Fecha o diálogo
        dialogModal.close();
      });
    }

    // Adiciona um evento de teclado para fechar o diálogo ao pressionar o botão Esc
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        dialogModal.close();
      }
    });
  }
});

///////////////////// REMOVER DOS FAVORITOS //////////////////

function removerFavorito(index) {
  // Recupera os favoritos do localStorage
  let favoritos = localStorage.getItem('favoritos');
  if (favoritos) {
    // Converte o array de favoritos de JSON para um array de objetos
    favoritos = JSON.parse(favoritos);

    // Verifica se o índice fornecido é válido
    if (index >= 0 && index < favoritos.length) {
      // Remove o favorito do array pelo índice
      favoritos.splice(index, 1);

      // Armazena o array de favoritos atualizado no localStorage
      localStorage.setItem('favoritos', JSON.stringify(favoritos));

      alert('O item foi removido dos favoritos!');
      window.location.href = 'favoritos.html'; // Redireciona para a página de favoritos
    } else {
      alert('Índice inválido!');
    }
  } else {
    alert('Não existem favoritos!');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const tabelaFavoritos = document.getElementById('tabela-favoritos');
  if (tabelaFavoritos) {
    const tbodyFavoritos = tabelaFavoritos.getElementsByTagName('tbody')[0];

    // Verifica se existem favoritos armazenados no localStorage
    let favoritos = localStorage.getItem('favoritos');
    if (favoritos) {
      // Converte o array de favoritos de JSON para um array de objetos
      favoritos = JSON.parse(favoritos);

      // Percorre o array de favoritos e adiciona-os à tabela
      favoritos.forEach(function (produto, index) {
        const novaLinha = document.createElement('tr');

        novaLinha.innerHTML = `
          <td>${produto.nome}</td>
          <td>${produto.codigo}</td>
          <td>${produto.quantidade}</td>
          <td>${produto.tipo}</td>
          <td>${produto.preco}</td>
          <td>${produto.local}</td>
          <td><button class="remover-button" onclick="removerFavorito(${index})">Remover</button></td>

        `;

        // Adicionar evento de clique à linha da tabela
        novaLinha.addEventListener('click', function () {
          exibirDescricao(produto.descricao);
        });

        tbodyFavoritos.appendChild(novaLinha);
      });
    }
  }
});
  

  ////////////////////////// LOCALIZAR MATERIAIS /////////////////////////////

  document.addEventListener('DOMContentLoaded', function () {
    const tabelaFavoritos = document.getElementById('tabela-favoritos');
    const inputPesquisa = document.getElementById('input-pesquisa');
    let linhasTabela = tabelaFavoritos.getElementsByTagName('tr');
  
    if (!inputPesquisa) return;
  
    inputPesquisa.addEventListener('input', function (event) {
      const termoPesquisa = event.target.value.toLowerCase();
      const palavrasPesquisa = termoPesquisa.split('*').map(palavra => palavra.trim());
  
      for (let i = 1; i < linhasTabela.length; i++) {
        const colunas = linhasTabela[i].getElementsByTagName('td');
        let correspondenciaEncontrada = false;
  
        for (let j = 0; j < colunas.length; j++) {
          const textoColuna = colunas[j].innerText.toLowerCase();
  
          let todasPalavrasEncontradas = true;
  
          for (let k = 0; k < palavrasPesquisa.length; k++) {
            const palavra = palavrasPesquisa[k];
  
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
          linhasTabela[i].style.display = '';
        } else {
          linhasTabela[i].style.display = 'none';
        }
      }
    });
  
    for (let i = 1; i < linhasTabela.length; i++) {
      linhasTabela[i].addEventListener('click', function () {
        const linhasTabela = tabelaFavoritos.getElementsByTagName('tr');
        for (let j = 1; j < linhasTabela.length; j++) {
          linhasTabela[j].classList.remove('selected-row');
        }
        this.classList.add('selected-row');
      });
    }
  });
  

///////////////////////// ADICIONAR AO CARRINHO ////////////////////////////////

function adicionarCarrinho() {
  console.log('teste')
  // Recupera os dados do produto selecionado
  const linhaSelecionada = document.querySelector('.selected-row')
  const nome = linhaSelecionada.cells[0].textContent
  const codigo = linhaSelecionada.cells[1].textContent
  const quantidade = linhaSelecionada.cells[2].textContent
  const tipo = linhaSelecionada.cells[3].textContent
  const preco = linhaSelecionada.cells[4].textContent

  // Cria um objeto com os dados do produto
  const produto = {
    nome: nome,
    codigo: codigo,
    quantidade: quantidade,
    tipo: tipo,
    preco: preco
  }

  // Verifica se já existem produtos no carrinho
  let carrinho = localStorage.getItem('carrinho')
  if (!carrinho) {
    // Se não existir, cria um novo carrinho com o produto atual
    carrinho = [produto]
  } else {
    // Se existir, converte o carrinho de JSON para um array de objetos
    carrinho = JSON.parse(carrinho)
    // Adiciona o produto atual ao carrinho
    carrinho.push(produto)
  }

  // Armazena o carrinho atualizado no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho))

  alert('O item foi adicionado ao carrinho!')
  window.location.href = 'cart-page.html' // Redireciona para a página do carrinho
}

document.addEventListener('DOMContentLoaded', function () {
  const tabelaCarrinho = document.getElementById('tabela-carrinho')
  if (tabelaCarrinho) {
    const tbodyCarrinho = tabelaCarrinho.getElementsByTagName('tbody')[0]

    // Verifica se existem produtos no carrinho
    let carrinho = localStorage.getItem('carrinho')
    if (carrinho) {
      // Converte o carrinho de JSON para um array de objetos
      carrinho = JSON.parse(carrinho)

      // Percorre o array de produtos do carrinho e adiciona-os à tabela
      carrinho.forEach(function (produto) {
        const novaLinha = document.createElement('tr')

        novaLinha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.codigo}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.tipo}</td>
        <td>${produto.preco}</td>
      `

        tbodyCarrinho.appendChild(novaLinha)
      })
    }
  }
})

////////////////////////////////// ABRIL MODAL NA PAGINA DO CARRINHO /////////////////////////////////////////////

function openProductModal(nome, imagem, descricao) {
  var modal = document.getElementById('productModal');
  var nameElement = document.getElementById('productDescription');
  var imageElement = document.getElementById('productImage');
  var desElement = document.getElementById('productDes');
  imageElement.classList.add('nome-da-classe');
  var closeModalButton = modal.querySelector('.close');

  // Define a descrição e a imagem do produto no modal
  nameElement.textContent = nome;
  imageElement.src = imagem;
  desElement.textContent = descricao;

  // Exibe o modal
  modal.style.display = 'block';

  // Adiciona o evento de clique para fechar o modal
  closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var tabelaCarrinho = document.getElementById('tabela-carrinho');
  tabelaCarrinho.addEventListener('click', function(event) {
    var target = event.target;

    // Verifica se o elemento clicado é uma célula da tabela
    if (target.tagName === 'TD') {
      var nome = target.parentElement.cells[0].textContent; // Obtém a descrição do produto
      var codigo = target.parentElement.cells[1].textContent;
      var produtosDoLocalStorage = JSON.parse(localStorage.getItem('produtos'));
      var produtoDesseCodigo = produtosDoLocalStorage.find(item => item.codigo === codigo);
      var imagem = produtoDesseCodigo.imagem;
      var descricao = produtoDesseCodigo.descricao;
      

      openProductModal(nome, imagem, descricao); // Chama a função openProductModal
    }
  });
});

var closeModalButton = document.querySelector('.close');
closeModalButton.addEventListener('click', function() {
  var modal = document.getElementById('productModal');
  modal.style.display = 'none';
});

