# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

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
|RF-001| O sistema deve permitir a criação de perfil para usuário e administrador | ALTA | 
|RF-002| O sistema deve permitir ao administrador o cadastro e atualização de produtos | ALTA |
|RF-003| O sistema deve permitir ao administrador acessar o histórico de cada produto, mostrando os seguintes dados: data e usuários que realizaram requisições  | MÉDIA |
|RF-004| O sistema deve alertar ao administrador quando cada produto atingir seu nível de estoque mínimo | ALTA |
|RF-005| O sistema deve permitir ao administrador gerar os seguintes relatórios: Relatório de inventário e Relatório de movimentações de estoque | MÉDIA |
|RF-006| O sistema deve permitir que o usuário faça requisição de um material por meio dos seguintes filtros de busca: código do produto, nome do produto, preço unitário e categoria  | ALTA |
|RF-007| O sistema deve permitir ao usuário consultar todos os materiais disponíveis, apresentando um feed de produtos, cada produto apresentado deve conter sua imagem, quantidade disponível, além de suas informações de cadastro   | ALTA |
|RF-008|  O sistema deve permitir ao usuário requisitar mais de um produto por operação, os produtos selecionados ficarão salvos no carrinho  | ALTA |
|RF-009|  O sistema deve apresentar uma mensagem de status de requisição ao usuário assim que ele finalizar o processo | ALTA |
|RF-010| O sistema deve apresentar opção de devolução de material, incluindo o motivo da devolução, o produto devolvido, quantidade e data | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
