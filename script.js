//função de mudar de tela

function login() {
  window.location.href = 'pages/home.html'
}

function logout() {
  window.location.href = '../index.html'
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

function navigateCartPage() {
  window.location.href = 'cart-page.html'
}

//const menu = document.querySelector('.main');
//const menuBtn = document.querySelector('.btn-sidebar');
//menuBtn.addEventListener('click', () => {
//menu.classList.toggle('active');
//});

function toggleModal(tableRow) {
  const dialog = document.getElementById('list-modal');
  const description = document.getElementById('description');
  const img = document.getElementById('product-img');
  const cartAddDiv = document.querySelector('.cart-add');

  description.innerText = tableRow.getAttribute('data-description');
  img.src = tableRow.getAttribute('data-imagem');
  dialog.showModal();

  cartAddDiv.addEventListener('click', adicionarCarrinho);
}
//função de pesquisar por materiais

function toggleModaal(element) {
  const description = element.getAttribute('data-description')
  const imageSrc = element.getAttribute('data-imagem')

  const descriptionElement = document.getElementById('description')
  const imageElement = document.getElementById('product-img')

  descriptionElement.textContent = description
  imageElement.src = imageSrc

  const modal = document.getElementById('list-modal')
  modal.showModal()
}

document.addEventListener('DOMContentLoaded', function () {
  const tabelaMateriais = document.getElementById('tabela-materiais')
  const inputPesquisa = document.getElementById('input-pesquisa')

  inputPesquisa.addEventListener('input', function (event) {
    const termoPesquisa = event.target.value.toLowerCase()
    const linhasTabela = tabelaMateriais.getElementsByTagName('tr')

    for (let i = 0; i < linhasTabela.length; i++) {
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
})

//function adicionarCarrinho() {
  //alert('O item foi adicionado ao carrinho!')
  //window.location.href = 'list.html'
//}

//favoritos



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
  let local =  document.getElementById('local').value

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
  )
  
  {
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
    local: local,
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

  // Limpa o conteúdo atual da tabela

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
        <span class="carrinho_list"><img src="../img/carrinho2.png" alt=""></span>
      </td>
    `
    tabelaBody.appendChild(novaLinha)
  })
}

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
  const tabelaCarrinho = document.getElementById('tabela-materiais')
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
})
