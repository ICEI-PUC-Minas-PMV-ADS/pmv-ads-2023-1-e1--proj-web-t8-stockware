# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Registro de teste 01:

Notificação caso o usuário não preencha todos os campos obrigatórios.

![Exemplo de Wireframe](img/10-msg-cadastrar-material.PNG)  <br>
 <sub> Figura 01 - Notificação <sub>



## Registro de teste 02:

Notificação após o usuário preencher todos os campos obrigatórios  e clicar em cadastrar.

![Exemplo de Wireframe](img/11-msg-cadastrar-material-ok.PNG).
 <sub> Figura 02 -  Notificação<sub>



## Registro de teste 03:

Limpar formulário após finalizar cadastro.

![Exemplo de Wireframe](img/1-cadastro-produto-proj.PNG). 
<sub> Figura 03 - Limpar formulário <sub>



## Registro de teste 04:

Material sendo registrado corretamente na tela de lista de materiais.

![Exemplo de Wireframe](img/12-material-add-list.PNG). 
<sub> Figura 04 -  Material sendo registrado<sub>



## Registro de teste 05:

Funcionalidade de pesquisar por um determinado produto utilizando palavras chaves através do caractere (*) 

![Exemplo de Wireframe](img/13-pesquisar.PNG). 
<sub> Figura 05 - Pesquisar por produto <sub>



## Registro de teste 06:

Funcionalidade de adicionar material ao carrinho dentro do campo de descrição do material.

**Falhas encontradas:**
Botão de adicionar ao carrinho fora de posição dependendo do tamanho da imagem.

**Solução:**
Corrigir a responsividade da tela de descrição de materiais.

![Exemplo de Wireframe](img/4-descricao-lista-materiais-cart-fav-proj.PNG). 
<sub> Figura 06 - Adicionar material ao carrinho <sub>



## Registro de teste 07:

Notificação ao adicionar material ao carrinho.

![Exemplo de Wireframe](img/14-msg-add-cart.PNG). 
<sub> Figura 07 -  Notificação<sub>



## Registro de teste 08:

Material sendo transferido para tela de carrinho.

**Falhas encontradas:**
1 - Somatório total dos produtos não corresponde ao total de produtos selecionados no carrinho.

2 - Não permite ao usuário escolher a quantidade de materiais desejados.

**Solução:**
1 - Corrigir lógica de cálculo referente a quantidade de produtos adicionados ao carrinho.

2 - Implementar opção de escolha da quantidade de podutos desejados pelo usuário.

![Exemplo de Wireframe](img/17-material-no-cart.PNG). 
<sub> Figura 08 - Material transferido <sub>



## Registro de teste 09:

Notificação após o usuário finalizar pedido de requisição de materiais.

**Pontos fracos:**
Não apresenta número aleatório para aprovação de reserva solicitada.

**Solução:**
 Implementar gerador de números aleatórios contendo 6 números usando javascript.
![Exemplo de Wireframe](img/3-carrinho-requ-proj.PNG).
 <sub> Figura 09 -  Notificação<sub>



## Registro de teste 10:

Notificação ao adicionar material aos favoritos.

![Exemplo de Wireframe](img/15-msg-add-fav.PNG). 
<sub> Figura 10 -  Notificação<sub>


## Avaliação

Durante os testes, foram indentificadas funcionalidades bem-sucedidas assim como também foram identificadas falhas, após a implementação de melhorias, o objetivo é apresentar um sistema estável e confiável. 







