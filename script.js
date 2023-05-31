
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

const menu = document.querySelector('.main');
const menuBtn = document.querySelector('.btn-sidebar');

  menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

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

