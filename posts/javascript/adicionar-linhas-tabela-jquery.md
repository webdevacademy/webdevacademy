---
title: Como Adicionar Linhas em uma Tabela com jQuery
slug: "adicionar-linhas-tabela-jquery"
path: "/tutoriais/adicionar-linhas-tabela-jquery"
date: "2014-02-25T08:00:10+00:00"
author: Ruan Carvalho
excerpt: No post anterior, vimos como remover as linhas dinâmicas de uma tabela sem usar os seletores do jQuery, Agora, neste tutorial, vamos aprender uma forma de adicionar linhas dinamicamente nessa mesma tabela, utilizando também o jQuery.
contentType:
  post
image: "https://res.cloudinary.com/webdevacademy/image/upload/v1532814505/featured/wda-tutorial-jquery.png"
dsq_thread_id: "6325385377"
categories: [ 'Tutoriais' ]
tags: [ 'jQuery', 'JavaScript' ]
featured_media: 'https://res.cloudinary.com/webdevacademy/image/upload/v1532814505/featured/wda-tutorial-jquery.png'
---
No post anterior, vimos como remover as linhas dinâmicas de uma tabela sem usar os seletores do jQuery. Caso você queira ver, <a title="Removendo Linhas de uma Tabela com jQuery" href="/tutoriais/remover-linhas-tabela-jquery" target="_blank" rel="noopener">o link é esse</a>.

Agora, neste tutorial, vamos aprender uma forma de adicionar linhas dinamicamente nessa mesma tabela, utilizando também o jQuery. Para isso, vamos adicionar um botão no _footer_ da tabela.

Vamos começar com a marcação da nossa tabela...

* * *

## Definindo a Tabela

A marcação da nossa tabela vai mudar um pouco. Ela deve ter, agora, um _<tbody>_ e um _<tfooter>_ que é onde vai ficar o botão que adicionar linhas:

```html
<table id="products-table">
<tbody>
 <tr>
   <th>Produto</th>
   <th>Código</th>
   <th>Quantidade</th>
   <th>Preço</th>
   <th>Ações</th>
 </tr>
 <tr>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>&nbsp;</td>
   <td>
     <button onclick="remove(this)" type="button">Remover</button>
   </td>
 </tr>
</tbody>
<tfoot>
 <tr>
   <td colspan="5" style="text-align: left;">
     <button onclick="AddTableRow()" type="button">Adicionar Produto</button>
   </td>
 </tr>
</tfoot>
</table>
```

O <tbody> é essencial para tornar mais fácil adicionar as linhas através do jQuery. Essa tag auxilia o agrupamento das linhas, e também na contagem delas, caso seja necessário para o seu projeto.

Já o _<tfooter>_ vai manter o botão de adicionar novas linhas separado do corpo da tabela. E isso também facilita na inserção de linhas e protege o nosso botão de ser colocado entre as linhas, por exemplo.

**Observe a função _AddTableRow( )_, no evento onclick do botão.**

É nessa função que vamos implementar para adicionar as linhas.

* * *

## Criando a Função AddTableRow com JavaScript e jQuery

No tutorial anterior, criamos um arquivo chamado _functions.js,_ para conter as nossas funções em um arquivo javascript externo. Vamos manter esse formato e adicionar, agora, a função AddTableRow.

**Essa função deve estar com o formato de funções do jQuery**, para que seja possível utilizarmos as funções dele.

Então, a função AddTableRow fica assim:

```js
(function($) {
  AddTableRow = function() {

    var newRow = $("<tr>");
    var cols = "";

    cols += '<td>&nbsp;</td>';
    cols += '<td>&nbsp;</td>';
    cols += '<td>&nbsp;</td>';
    cols += '<td>&nbsp;</td>';
    cols += '<td>';
    cols += '<button onclick="remove(this)" type="button">Remover</button>';
    cols += '</td>';

    newRow.append(cols);
    $("#products-table").append(newRow);

    return false;
  };
})(jQuery);
```

A variável _cols_ vai conter toda a marcação das colunas da linha. É nela que você irá colocar os inputs, ou qualquer outra coisa que a sua linha deve ter.

E, na última coluna colocamos o botão de remover a linha.

Essa nova linha, que fica guardada na variável _newRow_, vai ser  anexada no final do corpo da tabela, usando o append(). Por isso a importância do _tbody_ na marcação da tabela.

* * *

## Pronto!

Agora temos um botão que adiciona linhas dinâmicas em uma tabela.

Eu usei esta solução para criar uma tela de vendas de produtos, e o usuário pode adicionar mais itens na lista (tabela) e digitar o código e a quantidade, por exemplo. Agora, é só adaptar para o seu projeto.
