
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
   console.log("star")
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

function toggleModal(tableRow) {
  const dialog= document.getElementById("list-modal")
  const description= document.getElementById("description")
  const img= document.getElementById("product-img")
  description.innerText=tableRow.getAttribute("data-description"); 
  img.src=tableRow.getAttribute("data-imagem")
  dialog.showModal();
}
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

  function adicionarCarrinho() { 
    alert("O item foi adicionado ao carrinho!");
    window.location.href = 'list.html'
}


//favoritos


//função validar produto

function cadastrarProduto() {
  console.log("tty")
  // Obtendo os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var codigo = document.getElementById("codigo").value;
  var quantidade = document.getElementById("quantidade").value;
  var tipo = document.getElementById("tipo").value;
  var preco = document.getElementById("preco").value;
  var descricao = document.getElementById("descricao").value;
  var imagem = document.getElementById("imagem").value;

  // Validando os campos
  if (nome === "" || codigo === "" || quantidade === "" || tipo === "" || preco === "" || descricao === "" || imagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Criando um objeto JSON com os dados do produto
  var produto = {
    nome: nome,
    codigo: codigo,
    quantidade: quantidade,
    tipo: tipo,
    preco: preco,
    descricao: descricao,
    imagem: imagem
  };

  // Verificando se já existem produtos armazenados em local storage
  var produtosArmazenados = localStorage.getItem("produtos");
  var produtos = [];

  if (produtosArmazenados) {
    // Se existirem produtos armazenados, converte a string JSON para um array de objetos
    produtos = JSON.parse(produtosArmazenados);
  }

  // Adicionando o novo produto ao array
  produtos.push(produto);

  // Armazenando o array atualizado em local storage
  localStorage.setItem("produtos", JSON.stringify(produtos));

  // Limpa os campos do formulário após a validação
  document.getElementById("nome").value = "";
  document.getElementById("codigo").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("imagem").value = "";

  alert("Cadastro de produto realizado com sucesso!");
}


