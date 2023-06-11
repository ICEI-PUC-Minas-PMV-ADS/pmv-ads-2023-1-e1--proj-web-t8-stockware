# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.


|Caso de teste  | CT-01 – Cadastrar materiais  |
|-------|-------------------------|
|Requisitos Associados| RF-02 - O site deve apresentar um formulário para preenchimento dos dados do material. O site deve permitir que o administrador informe dados relevantes do material, tais como: nome, código, quantidade, tipo, preço, descrição e imagens. | 
|Objetivo do Teste| Verificar se os materiais cadastrados estão sendo apresentados na tela de “lista de materiais”. | 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Realizar login como administrador. 4) Acessar a página de “cadastro de materiais”.|
|Critérios de Êxito|Se um campo obrigatório não for preenchido, deve exibir uma mensagem de erro. |

 |Caso de teste  | CT-02 – Lista de materiais |
|-------|-------------------------|
|Requisitos Associados| RF-07 – O site deve conter todas as informações fornecidas durante o cadastro e permitir a pesquisa de materiais através do campo "Pesquisar". Nesse campo de pesquisa, tanto o usuário quanto o administrador podem usar o caractere coringa asterisco (*) para que o material correspondente seja exibido independentemente da ordem das palavras digitadas. Além disso, o site deve permitir que um material desejado seja adicionado ao carrinho, possibilitando que o usuário ou admin finalize o pedido de requisição do produto. | 
|Objetivo do Teste| 1- Verificar se o campo de pesquisar por materiais está filtrando corretamente todos os materiais associados as palavras chaves digitadas; 2-Verificar se os materiais que foram adicionados ao carrinho estão sendo apresentado correntemente no carrinho.| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Visualizar a página principal. 4) Clicar no menu lateral esquerdo. 5) Acessar a opção de “lista de materiais”|
|Critérios de Êxito| Após finalizar o pedido de requisição, a página deve atualizar e limpar todos os dados de materiais selecionados no carinho|


|Caso de teste  | CT-03 – Carrinho  |
|-------|-------------------------|
|Requisitos Associados| RF-08 O site deve fornecer uma interface na tela de carrinho que permita ao usuário selecionar os materiais desejados para requisição | 
|Objetivo do Teste|1) Verificar se após requisição os materiais vão sair do carrinho;| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Através de qualquer tela. 4) Acesse o ícone de carrinho disponível no cabeçalho|
|Critérios de Êxito| O site deve informar o somatório em R$ (reais) dos produtos no carrinho |

|Caso de teste  | CT-04 – Mensagem de status (requisição de material) |
|-------|-------------------------|
|Requisitos Associados| RF-09 – O Site deve apresentar uma mesnagm de status após finalizar pedido. | 
|Objetivo do Teste|Verificar se a mensagem está sendo apresentado corretamente| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Através de qualquer tela. 4) Acesse o ícone de carrinho disponível no cabeçalho. 5) Finalize uma requisição de materiais|
|Critérios de Êxito|O site deve responder rapidamente após realizar solicitação de um material, informando se o pedido ja foi criado|

|Caso de teste | CT-05 – Adicionar item aos Favoritos |
|-------|-------------------------|
|Requisitos Associados| RF-10 – O Site deve fornecer um mecanismo que permita que o usuário favorite um item em específico, podendo ter acesso a uma lista dos favoritos salvos. | 
|Objetivo do Teste|Verificar se é possível adicionar o item à lista de favoritos| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Através de qualquer tela. 4) Acesse a lista de materiais. 5) Escolha um item e clique no ícone de adicionar aos favoritos. 6) Vá até a página de favoritos e certifique que o item favoritado está constando.  |
|Critérios de Êxito|O site deve favoritar o item rapidamente após realizar a requisição, informando se o item foi adionado aos favoritos|
