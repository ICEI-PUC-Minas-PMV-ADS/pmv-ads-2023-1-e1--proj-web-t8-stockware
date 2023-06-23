# Especificações do Projeto


Após observação direta de alguns componentes do grupo em seus próprios ambientes de trabalho, bem como pesquisa aprofundada de toda a equipe sobre o tema em questão, analisando o problema existente, os objetivos e o público-alvo ideal citados acima para o sistema, foi possível consolidar as Personas e Histórias de Usuários. 

## Personas

Eduardo Gonçalves, 24 anos, é técnico em manutenção eletrônica em um empresa multinacional. Nos momentos livres gosta de praticar esportes, estuda programação de PLC (controlador lógico programável) e aos finais de semana sai com seus amigos.

Marcelo Silva, 28 anos, almoxarife, responsável pelo gerenciamento de materiais em uma empresa multinacional. Nos momentos livres gosta de jogar futebol, praticar natação e jogar videogame.

Vanessa Santos, 34 anos, gerente, funcionária de uma loja de venda de peças automotivas. Nos momentos livres pratica natação e ciclismo e aos finais de semana viaja para o interior da cidade para casa de seus pais.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Vanessa Santos  | Receber alertas quando a quantidade de um determinado material atingir um nível mínimo           | Para que eu possa providenciar a prevenção de compras e evitar paralisações nas vendas
|Eduardo Gonçalves       | Que não seja necessário me deslocar até o almoxarifado para conferir determinado material | Para aproveitar meu tempo na realização de tarefas rotineiras |
|Vanessa Santos | Poder personalizar o layout do sistema conforme minhas necessidades | Ter exclusividade |
|Eduardo Gonçalves | Que cada material contenha um manual em PDF | Para me orientar nas instalações e reparos |
|Marcelo Silva | Um sistema de controle de estoque que me permita acompanhar os pedidos de peças e quantidade disponível em estoque. | Para que eu possa garantir que as peças estejam disponíveis quando os clientes trouxerem seus veículos para manutenção e reparo. |
|Eduardo Gonçalves | Que os materiais contenham informações técnicas conforme especificações fornecidas pelo fabricante. | Para que durante a execução de um projeto eu possa fazer de acordo com as normas técnicas.|
|Eduardo Gonçalves | Facilidade ao filtrar um material de acordo com alguma especificação técnica do produto| Diminuir tempo de procura|
|Vanessa Santos | Poder gerar relatórios de uso de materiais e histórico de requisições| Para que eu possa tomar decisões estratégicas fundamentadas, com precisão e confiabilidade|
|Eduardo Gonçalves | Solicitar materiais através de uma interface simples e intuitiva| Para usar do sistema de forma rápida e eficiente, sem necessidade de treinamentos complexos ou extensos|
|Marcelo Silva|Localizar os materiais nos estoques rapidamente|Para que eu possa atender mais pessoas durante meu turno de trabalho|
|Marcelo Silva|Receber atualizações do estoque|Facilitar no gerenciamento dos materiais|


## Requisitos

Os requisitos funcionais e não funcionais que descrevem as possibilidades de interação dos usuários e os aspectos que o sistema deverá apresentar de maneira geral, definem o escopo funcional do projeto. Esses requisitos são apresentados a seguir.


### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir a criação de perfil para usuário e administrador | MÉDIA | 
|RF-002| O sistema deve permitir ao administrador o cadastro e atualização de produtos | ALTA |
|RF-003| O sistema deve permitir ao administrador acessar o histórico de cada produto, mostrando os seguintes dados: data e usuários que realizaram requisições  | MÉDIA |
|RF-004| O sistema deve alertar ao administrador quando cada produto atingir seu nível de estoque mínimo | ALTA |
|RF-005| O sistema deve permitir ao administrador gerar os seguintes relatórios: Relatório de inventário e Relatório de movimentações de estoque | MÉDIA |
|RF-006| O sistema deve apresentar uma listagem de materias onde  permita que o usuário faça requisição de um material por meio dos seguintes filtros de busca: código do produto, nome do produto, preço unitário e categoria.  | ALTA |
|RF-007| O sistema deve permitir ao usuário consultar todos os materiais disponíveis, apresentando um feed de produtos, cada produto apresentado deve conter sua imagem, quantidade disponível, além de suas informações de cadastro   | ALTA |
|RF-008|  O sistema deve permitir ao usuário requisitar mais de um produto por operação, os produtos selecionados ficarão salvos no carrinho  | ALTA |
|RF-009|  O sistema deve apresentar uma mensagem de status de requisição ao usuário assim que ele finalizar o processo | ALTA |
|RF-010| O sistema deve apresentar na tela Home um menu de navegação, com as seguintes opções, listagem de materiais, consulta de reserva e devolução de material, incluindo o motivo da devolução, o produto devolvido, quantidade e data.  | MÉDIA |




### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança: O sistema deve ser seguro e confiável, com autenticação segura para proteger informações sensíveis | ALTA | 
|RNF-002| Disponibilidade: O sistema deve estar disponível 24 horas por dia, 7 dias por semana, com tempo de inatividade mínimo para manutenção programada |  ALTA | 
|RNF-003| Desempenho: O sistema deve ser capaz de lidar com até 20 mil pessoas simultaneamente, e processar pedidos rapidamente, com tempos de resposta de página rápidos e carregamento de imagens eficiente, podendo ser capaz de crescer para atender às necessidades futuras do negócio, com a capacidade de lidar com aumento de tráfego e demanda | ALTA |
|RNF-004| Usabilidade: O sistema deve ser fácil de usar e intuitivo, com uma interface de usuário amigável e acesso fácil às funcionalidades principais | ALTA |
|RNF-005| O sistema deve ser compatível com os principais navegadores: Google Chrome, Firefox, Opera, Edge, com todas as funcionalidades sendo acessíveis em computadores Linux, Windows e IOS, além de dispositivos mobile | ALTA |
|RNF-006| Manutenção: O sistema deve ser fácil de manter e atualizar, com uma arquitetura modular que permite a adição de novos recursos e funcionalidades sem afetar o desempenho e a disponibilidade do sistema | MÉDIA |

  

## Restrições

Apresenta-se abaixo uma tabela com as restrições que devem ser levadas em conta para a realização deste projeto. Essas limitações se configuram como obrigações manifestas que restringem a execução do projeto em áreas específicas. É crucial ter em mente essas exigências durante todo o processo de desenvolvimento do projeto a fim de assegurar o seu sucesso.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| É imprescindível que o projeto esteja concluído até o final do semestre letivo, sem ultrapassar a data de 25/06/2023. |
|02| O sistema deve se limitar exclusivamente às tecnologias básicas da Web no Front-end        |
|03|Não é permitido que a equipe contrate serviços de terceiros para desenvolver o projeto|
|04|O sistema deve ser desenvolvido em conformidade com as regulamentações e normas legais aplicáveis, como a proteção de dados e os padrões de segurança.|

