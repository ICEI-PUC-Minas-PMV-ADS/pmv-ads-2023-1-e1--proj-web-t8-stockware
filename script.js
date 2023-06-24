///////////////////////////////// FUNÇÃO DE MUDAR DE TELA (MENU LATERAL) ////////////////////////////////////

/* function login() {
  window.location.href = 'pages/home.html'
} */

function logout() {
  localStorage.removeItem('admin');
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

///////////////////////// MENU LATERAL ///////////////////////////////////

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

///////////////// DIALOGO - DESCRIÇÃO DOS MATERIAIS ///////////////////

function toggleModal2(tableRow) {
  const dialog = document.getElementById('list-modal')
  const description = document.getElementById('description')
  const img = document.getElementById('product-img')
  const cartAddDiv = document.querySelector('.cart-add')

  description.innerText = tableRow.getAttribute('data-description')
  img.src = tableRow.getAttribute('data-imagem')
  dialog.showModal()

  cartAddDiv.addEventListener('click', adicionarCarrinho)
}

/////////////// FECHAR CAIXA DE DIALOGO DA LISTA DE MATERIAIS /////////////////

document.addEventListener('DOMContentLoaded', function () {
  // Obtém os elementos dos botões de fechar
  var fecharDescricaoBtns = document.getElementsByClassName(
    'btn_fechar_descricao'
  )
  var fecharDescricaoOkBtns = document.getElementsByClassName(
    'btn_fechar_descricao_ok'
  )

  // Obtém o elemento do diálogo
  var dialogModal = document.getElementById('list-modal')

  // Verifica se os elementos foram encontrados corretamente
  if (
    fecharDescricaoBtns.length > 0 &&
    fecharDescricaoOkBtns.length > 0 &&
    dialogModal
  ) {
    // Itera sobre os botões de fechar
    for (var i = 0; i < fecharDescricaoBtns.length; i++) {
      var fecharDescricaoBtn = fecharDescricaoBtns[i]

      // Adiciona um evento de clique a cada botão de fechar
      fecharDescricaoBtn.addEventListener('click', function () {
        // Fecha o diálogo
        dialogModal.close()
      })
    }

    for (var j = 0; j < fecharDescricaoOkBtns.length; j++) {
      var fecharDescricaoOkBtn = fecharDescricaoOkBtns[j]

      // Adiciona um evento de clique a cada botão de fechar "ok"
      fecharDescricaoOkBtn.addEventListener('click', function () {
        // Fecha o diálogo
        dialogModal.close()
      })
    }

    // Adiciona um evento de teclado para fechar o diálogo ao pressionar o botão Esc
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        dialogModal.close()
      }
    })
  }
})

///////////////////////////////// FUNÇÃO DE PESQUISAR POR MATERIAIS ////////////////////////////////////

function toggleModal(element) {
  const description = element.getAttribute('data-description')
  const imageSrc = element.getAttribute('data-imagem')

  const descriptionElement = document.getElementById('description')
  const imageElement = document.getElementById('product-img')

  descriptionElement.textContent = description
  descriptionElement.style.wordWrap = 'break-word' // Adiciona a propriedade word-wrap

  imageElement.src = imageSrc

  const modal = document.getElementById('list-modal')
  modal.showModal()
}

document.addEventListener('DOMContentLoaded', function () {
  const tabelaMateriais = document.getElementById('tabela-materiais')
  const inputPesquisa = document.getElementById('input-pesquisa')

  if (!inputPesquisa) return

  inputPesquisa.addEventListener('input', function (event) {
    const termoPesquisa = event.target.value.toLowerCase()
    const linhasTabela = tabelaMateriais.getElementsByTagName('tr')

    for (let i = 1; i < linhasTabela.length; i++) {
      // Inicia a partir do índice 1 para excluir o cabeçalho
      const colunas = linhasTabela[i].getElementsByTagName('td')
      let correspondenciaEncontrada = false

      for (let j = 0; j < colunas.length; j++) {
        const textoColuna = colunas[j].innerText.toLowerCase()
        const palavrasPesquisa = termoPesquisa.split('*')

        let todasPalavrasEncontradas = true

        for (let k = 0; k < palavrasPesquisa.length; k++) {
          const palavra = palavrasPesquisa[k].trim()

          if (palavra !== '' && !textoColuna.includes(palavra)) {
            todasPalavrasEncontradas = false
            break
          }
        }

        if (todasPalavrasEncontradas) {
          correspondenciaEncontrada = true
          break
        }
      }

      if (correspondenciaEncontrada) {
        linhasTabela[i].classList.remove('hide-row')
      } else {
        linhasTabela[i].classList.add('hide-row')
      }
    }
  })

  ////////////////////////// DESTACAR LINHA AO CLICAR /////////////////////////////


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
  })

  // Obtém o elemento do botão de fechar
  var fecharDescricaoBtn = document.getElementById('fechar_descricao')

  // Obtém o elemento do diálogo
  var dialogModal = document.getElementById('list-modal')

  // Verifica se os elementos foram encontrados corretamente
  if (fecharDescricaoBtn && dialogModal) {
    // Adiciona um evento de clique ao botão de fechar
    fecharDescricaoBtn.addEventListener('click', function () {
      // Fecha o diálogo
      dialogModal.close()
    })
  }
})

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
  let local = document.getElementById('local').value

  // Validando os campos
  if (
    nome === '' ||
    codigo === '' ||
    quantidade === '' ||
    tipo === '' ||
    preco === '' ||
    descricao === '' ||
    imagem === '' ||
    local === ''
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
    imagem: imagem,
    local: local
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
  document.getElementById('local').value = ''
  alert('Cadastro de produto realizado com sucesso!')
}

function atualizarListaProdutos() {
  console.log('hjk')
  let produtosArmazenados = localStorage.getItem('produtos')
  let produtos = []

  if (produtosArmazenados) {
    produtos = JSON.parse(produtosArmazenados)
  }

  let tabelaBody = document.getElementById('produtos-lista')

  if (!tabelaBody) return

  // Limpa o conteúdo atual da tabela
  tabelaBody.innerHTML = ''

  // Percorre o array de produtos e adiciona cada um na tabela
  produtos.forEach(function (produto) {
    let novaLinha = document.createElement('tr')

    novaLinha.onclick = () => toggleModal2(novaLinha)
    novaLinha.setAttribute('data-imagem', produto.imagem)
    novaLinha.setAttribute('data-description', produto.descricao)

    novaLinha.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.codigo}</td>
      <td>${produto.quantidade}</td>
      <td>${produto.tipo}</td>
      <td>R$ ${produto.preco}</td>
      <td>${produto.local}</td>
    `
    tabelaBody.appendChild(novaLinha)
  })
}

// Chama a função para atualizar a lista de produtos ao carregar a página
atualizarListaProdutos()


var closeButton = document.querySelector('.logo');
closeButton.addEventListener('click', function() {
  // Verificar o tipo de usuário (por exemplo, se é um administrador ou não)
  var isAdmin = localStorage.getItem("admin"); // Defina aqui a lógica para verificar se o usuário é um administrador

  if (isAdmin) {
    window.location.href = 'home-admin.html'; // Redirecionar para a página home-admin
  } else {
    window.location.href = 'home.html'; // Redirecionar para a página home
  }
});