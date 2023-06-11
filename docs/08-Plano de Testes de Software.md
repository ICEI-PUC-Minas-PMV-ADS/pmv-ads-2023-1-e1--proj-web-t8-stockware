# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.


|Caso de teste  | CT-01 – Cadastrar materiais  |
|-------|-------------------------|
|Requisitos Associados| RF-02 - O site deve apresentar um formulário para preenchimento dos dados do material. O site deve permitir que o administrador informe dados relevantes do material, tais como: nome, código, quantidade, tipo, preço, descrição e imagens. | 
|Objetivo do Teste| Verificar se os materiais cadastrados estão sendo apresentados na tela de “lista de materiais”. | 
|Passos|Acessar o Navegador - Informar o endereço do Site - Realizar login como administrador - Acessar a página de “cadastro de materiais”.|
|Critérios de Êxito|Se um campo obrigatório não for preenchido, deve exibir uma mensagem de erro. |

 |Caso de teste  | CT-02 – Lista de materiais |
|-------|-------------------------|
|Requisitos Associados| RF-07 – O site deve conter todas as informações fornecidas durante o cadastro e permitir a pesquisa de materiais através do campo "Pesquisar". Nesse campo de pesquisa, tanto o usuário quanto o administrador podem usar o caractere coringa asterisco (*) para que o material correspondente seja exibido independentemente da ordem das palavras digitadas. Além disso, o site deve permitir que um material desejado seja adicionado aos favoritos e também ao carrinho, possibilitando que o usuário finalize o pedido de requisição do produto. | 
|Objetivo do Teste| 1- Verificar se o campo de pesquisar por materiais está filtrando corretamente todos os materiais associados as palavras chaves digitadas; 2- Verificar se os materiais que foram definidos como favoritos foram registrados na tela favoritos; 3-	Verificar se os materiais que foram adicionados ao carrinho estão sendo apresentado correntemente no carrinho.| 
|Passos|1) Acessar o Navegador. 2) Informar o endereço do Site. 3) Visualizar a página principal. 4) Clicar no menu lateral esquerdo. 5) Acessar a opção de “lista de materiais”|
|Critérios de Êxito|Critérios de Êxito	Após adicionar um material aos favoritos, o site deve exibir uma confirmação visual de que o material foi adicionado com sucesso à lista de favoritos. Ao adicionar um material ao carrinho, o ícone do carrinho no cabeçalho deve apresentar a quantidade de produtos selecionados. Essa quantidade deve ser atualizada dinamicamente conforme novos produtos são adicionados ou removidos do carrinho.|


## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
