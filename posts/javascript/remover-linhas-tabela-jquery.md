---
id: 37
title: Como Remover Linhas de uma Tabela com jQuery
slug: remover-linhas-tabela-jquery
path: /tutoriais/remover-linhas-tabela-jquery/
date: "2014-01-28T08:00:08+00:00"
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender uma solução para remover linhas que foram criadas dinamicamente em uma tabela, utilizando para isso o jQuery. Porém, não usaremos os seletores do jQuery já que as linhas serão criadas pelo usuário.
contentType: post
image: "https://res.cloudinary.com/webdevacademy/image/upload/v1532814505/featured/wda-tutorial-jquery.png"
featured_media: "https://res.cloudinary.com/webdevacademy/image/upload/v1532814505/featured/wda-tutorial-jquery.png"
dsq_thread_id:
  - "6325385405"
categories: [ 'Tutoriais' ] 
tags: [ 'jQuery', 'JavaScript' ]
---
Neste tutorial você vai aprender uma forma prática de remover linhas de uma tabela com jQuery.

Como requisito, **os itens da lista (a tabela) são adicionados dinamicamente, pelo usuário**, então não podemos definir _id&#8217;s_ para as linhas da tabela para poder removê-las. Além disso, **as funções de front-end devem ficar em um arquivo javascript separado.**

* * *

## Marcação HTML da Tabela

Para começar, vamos criar a marcação da tabela, em uma página HTML.

Faça o <a href="http://jquery.com/download/" target="_blank" rel="noopener">download do jQuery</a> para uma pasta _js_ no seu projeto, e coloque uma referência para ele na sua página:

```html
<script type="text/javascript" src="js/jquery.js"></script>
```

E na sua página (index.htm), coloque esta marcação de tabela:

```html
<table id="details-table" class="table table-bordered">
  <tr>
    <th>Coluna 1</th>
    <th>Coluna 2</th>
    <th>Coluna 3</th>
    <th>Coluna 4</th>
    <th>Opções</th>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td><button type="button" onclick="remove(this)">Excluir</button></td>
  </tr>
</table>
```

O ponto principal desta marcação é adicionar esta linha ao evento _onclick_ dos botões de remover:

```html
<button type="button" onclick="remove(this)">
```

Veja que deve ser passado como parâmetro o próprio _button_ (com o parâmetro this) para que o jQuery saiba qual objeto estará selecionado, já que nesta tela não vai ser possível usar seletores porque as linhas serão criadas dinamicamente.

O próximo passo, agora, é implementar a função _remove()_ em javascript&#8230;

* * *

## Criando a Função com Javascript + jQuery

Crie, agora, um arquivo javascript chamado _functions.js_. Eu costumo deixá-lo em na pasta _js_ onde está o jQuery.

Adicione este código ao arquivo _functions.js_:

```js
(function($) {
  remove = function(item) {
    var tr = $(item).closest('tr');

    tr.fadeOut(400, function() {
      tr.remove();
    });

    return false;
  }
})(jQuery);
```

Esta função procura a linha da tabela _(row)_ que esteja mais próxima do botão que disparou o evento.

Com essa linha obtida, na variavel _tr_ é possível utilizar o jQuery para fazer um efeito de desvanecimento na linha (utilizando a função _fadeOut_) e remover a marcação da linha na página, ou seja remover a <tr>, usando a função _remove_ do jQuery.

Para fechar, o _return false_ evita que a página seja recarregada pelo evento de clique do botão.

**Não esqueça de inserir a referência a este arquivo na página HTML:**

```html
<script type="text/javascript" src="js/functions.js"></script>
```

* * *

## Sobre as Funções jQuery em Arquivos Separados

Um aspecto interessante desse código é que ele chama funções do jQuery em um arquivo Javascript separado.

Porém, este novo arquivo não enxerga as funções do jQuery automaticamente. O jQuery fica fora do escopo, e nenhuma das suas funções irão funcionar. Apenas as que são Javascript puro.

Para que o arquivo js externo tenha acesso às funções do jQuery, **você deve criar uma função com a sintaxe do jQuery**, e utilizá-la para tratar seus eventos. Observe que apenas a declaração da função é diferente:

```js
(function($) {
  functionName = function() {
    // seu codigo aqui
  };
})(jQuery);
```

* * *

## Próximos Passos&#8230;

A remoção esta pronta. Seria interessante criar, depois, uma função para adicionar as linhas à tabela. 

Mas, fica para um outro tutorial.

