# Plano de Testes de Software

<!--<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>-->

<!-- Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas. -->


|Caso de teste  | CT-01 – Cadastrar materiais  |
|-------|-------------------------|
|Requisitos Associados| **RF-02** - O site deve apresentar um formulário para preenchimento dos dados do material. Deve permitir que o administrador informe dados relevantes do material, tais como: nome, código, quantidade, tipo, preço, descrição e imagens. | 
|Objetivo do Teste| Verificar se os materiais cadastrados estão sendo apresentados na tela de “Lista de materiais”. | 
|Passos|**1.** Acessar o Navegador. <br> **2.** Informar o endereço do Site. <br> **3.** Realizar login como administrador.<br> **4.** Acessar a página de “Cadastro de materiais”.|
|Critérios de Êxito|Se um campo obrigatório não for preenchido, deve exibir uma mensagem de erro. |

 |Caso de teste  | CT-02 – Lista de materiais |
|-------|-------------------------|
|Requisitos Associados| RF-07 – O site deve conter todas as informações fornecidas durante o cadastro e permitir a pesquisa de materiais através do campo "Pesquisar". Nesse campo de pesquisa, tanto o usuário quanto o administrador podem usar o caractere coringa asterisco (*) para que o material correspondente seja exibido independentemente da ordem das palavras digitadas. Além disso, o site deve permitir que um material desejado seja adicionado ao carrinho e aos favoritos, possibilitando que o usuário ou admin finalize o pedido de requisição do produto e adicione a lista de favoritos. | 
|Objetivo do Teste| 1- Verificar se o campo de pesquisar por materiais está filtrando corretamente todos os materiais associados as palavras chaves digitadas; 2-Verificar se os materiais que foram adicionados ao carrinho estão sendo apresentado correntemente no carrinho. 3-Verificar se os materiais que foram adicionados aos favoritos estão sendo apresentado correntemente na lista de favoritos.| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Visualizar a página principal. 4) Clicar no menu lateral esquerdo. 5) Acessar a opção de “Lista de materiais”|
|Critérios de Êxito| Após finalizar o pedido de requisição, a página deve atualizar e limpar todos os dados de materiais selecionados no carinho. Os materiais contidos em carrinho ou favoritos devem apresentar um botão de remover material.|


|Caso de teste  | CT-03 – Carrinho  |
|-------|-------------------------|
|Requisitos Associados| RF-08 O site deve fornecer uma interface na tela de carrinho que permita ao usuário selecionar os materiais desejados para requisição | 
|Objetivo do Teste|1) Verificar se após requisição os materiais vão sair do carrinho;| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Através de qualquer tela. 4) Acesse o ícone de carrinho disponível no cabeçalho|
|Critérios de Êxito| O site deve informar o somatório em R$ (reais) dos produtos no carrinho, considerando a quantidade escolhida multiplicado pelo valor do produto. |

|Caso de teste  | CT-04 – Mensagem de status (requisição de material) |
|-------|-------------------------|
|Requisitos Associados| RF-09 – O Site deve apresentar uma mesnagm de status após finalizar pedido. | 
|Objetivo do Teste|Verificar se a mensagem está sendo apresentado corretamente| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Através de qualquer tela. 4) Acesse o ícone de carrinho disponível no cabeçalho. 5) Finalize uma requisição de materiais|
|Critérios de Êxito|O site deve responder rapidamente após realizar solicitação de um material, informando se o pedido ja foi criado, além de informar um código de 6 dígitos para ser usado em futuras aprovações ou consulta de requisição.|


