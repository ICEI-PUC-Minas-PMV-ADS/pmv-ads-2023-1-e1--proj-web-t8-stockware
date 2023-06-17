
///////////////////////// ADICIONAR AO CARRINHO ////////////////////////////////

function adicionarCarrinho() {
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
  
    // Verifica se já existem produtos no carrinho
    let carrinho = localStorage.getItem('carrinho');
    if (!carrinho) {
      // Se não existir, cria um novo array de favoritos com o produto atual
      carrinho = [produto];
    } else {
      // Se existir, converte o array de favoritos de JSON para um array de objetos
      carrinho = JSON.parse(carrinho);
  
      // Verifica se o material já existe nos favoritos
      const materialExistente = carrinho.find(
        (item) => item.codigo === produto.codigo
      );
  
      if (materialExistente) {
        alert('O item já está no carrinho!');
        return; // Interrompe a execução da função
      }
  
      // Adiciona o produto atual ao array de favoritos
      carrinho.push(produto);
    }
  
    // Armazena o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    alert('O item foi adicionado ao Carrinho!');
  }
  
  
  
  ////////////////////////////////// CARRINHO /////////////////////////////////////////////
  
  window.addEventListener('DOMContentLoaded', function() {
    // Obtém todas as linhas da tabela
    var rows = document.querySelectorAll('#tabela-carrinho tbody tr');
  
    // Inicializa o total como zero
    var total = 0;
  
    // Percorre todas as linhas da tabela
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var precoCell = row.querySelector('td:nth-child(5)');
      var qtdCell = row.querySelector('td:nth-child(3)');
  
      // Obtém o valor e a quantidade da célula atual
      var precoText = precoCell.textContent;
      var precoValue = parseFloat(precoText.replace('R$', '').trim());
  
      // Define o valor de estoque como um atributo da célula de quantidade
      qtdCell.setAttribute('data-estoque', qtdCell.textContent.trim());
  
      // Multiplica o valor pelo quantidade e adiciona ao total
      var qtdValue = parseInt(qtdCell.textContent.trim());
      var subtotal = precoValue * qtdValue;
      total += subtotal;
  
      // Torna a célula de quantidade editável
      qtdCell.setAttribute('contenteditable', 'true');
  
      // Adiciona um evento de escuta para capturar as alterações na célula
      qtdCell.addEventListener('input', function(event) {
        // Obtém o valor digitado na célula
        var inputValue = event.target.textContent.trim();
  
        // Verifica se o valor digitado é vazio ou nulo
        if (inputValue === '' || inputValue === null) {
          // Define a quantidade como 0
          event.target.textContent = '';
        } else {
          // Obtém a nova quantidade digitada
          var newQtdValue = parseInt(inputValue);
          var estoqueValue = parseInt(event.target.getAttribute('data-estoque'));
  
          // Verifica se a nova quantidade é um número válido
          if (!isNaN(newQtdValue)) {
            // Verifica se a nova quantidade é maior que o estoque disponível
            if (newQtdValue > estoqueValue) {
              // Exibe a mensagem de estoque insuficiente
              alert('Estoque insuficiente. Quantidade disponível: ' + estoqueValue);
              
              // Restaura a quantidade anterior na célula
              event.target.textContent = estoqueValue;
            } else {
              // Atualiza o valor da célula
              event.target.textContent = newQtdValue;
  
              // Recalcula o subtotal para a linha atual
              var newSubtotal = precoValue * newQtdValue;
  
              // Atualiza o total
              total = total - subtotal + newSubtotal;
              subtotal = newSubtotal;
  
              // Atualiza o total na tela
              var totalArea = document.getElementById('total');
              totalArea.textContent = 'Total: R$ ' + total.toFixed(2);
            }
          } else {
            // Valor inválido digitado, restaura a quantidade anterior na célula
            event.target.textContent = estoqueValue;
          }
        }
      });
    }
  
    // Apresenta o valor total inicial na área designada como "total"
    var totalArea = document.getElementById('total');
    totalArea.textContent = 'Total: R$ ' + total.toFixed(2);
  });
  
/////////////////////////////// SOLICITAR RESERVA ///////////////////////////

function solicitarMateriais() {
  // Verifica se há materiais no carrinho
  var tabelaCarrinho = document.getElementById('tabela-carrinho');
  var tbody = tabelaCarrinho.querySelector('tbody');
  if (tbody.children.length === 0) {
    alert('Não há materiais no carrinho para solicitar.');
    return;
  }

  // Gera um número aleatório de 6 dígitos
  var numeroPedido = Math.floor(Math.random() * 900000) + 100000;

  // Exibe o número do pedido
  alert('Número do pedido: ' + numeroPedido);

  // Remove todas as linhas da tabela
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // Atualiza o total para zero
  var totalArea = document.getElementById('total');
  totalArea.textContent = 'Total: R$ 0.00';

  // Limpa o armazenamento local (carrinho)
  localStorage.removeItem('carrinho');
}

  
  

  ///////////////////// REMOVER DO CARRINHO ////////////////////
  
  function removerFavorito(index) {
    // Recupera os favoritos do localStorage
    let carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
      // Converte o array de favoritos de JSON para um array de objetos
      carrinho = JSON.parse(carrinho);
  
      // Verifica se o índice fornecido é válido
      if (index >= 0 && index < carrinho.length) {
        // Remove o favorito do array pelo índice
        carrinho.splice(index, 1);
  
        // Armazena o array de favoritos atualizado no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
        alert('O item foi removido do carrinho!');
        window.location.href = 'cart-page.html'; // Redireciona para a página de favoritos
      } else {
        alert('Índice inválido!');
      }
    } else {
      alert('Não existe em carrinho!');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const tabelaFavoritos = document.getElementById('tabela-carrinho');
    if (tabelaFavoritos) {
      const tbodyFavoritos = tabelaFavoritos.getElementsByTagName('tbody')[0];
  
      // Verifica se existem favoritos armazenados no localStorage
      let carrinho = localStorage.getItem('carrinho');
      if (carrinho) {
        // Converte o array de favoritos de JSON para um array de objetos
        carrinho = JSON.parse(carrinho);
  
        // Percorre o array de favoritos e adiciona-os à tabela
        carrinho.forEach(function (produto, index) {
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
    if (clickedCell.cellIndex === 2 || clickedCell.cellIndex === 6) {
      return; // Não exibe a descrição se clicar nessas células
    }
    
    dialog.showModal();
  
    cartAddDiv.addEventListener('click', adicionarCarrinho);
  }
  
  

//////////// FECHAR CAIXA DE DESCRIÇÃO DE MATERIAIS /////////////////


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
  

  ////////////////////////// LOCALIZAR MATERIAIS /////////////////////////////

  document.addEventListener('DOMContentLoaded', function () {
    const tabelaFavoritos = document.getElementById('tabela-carrinho');
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