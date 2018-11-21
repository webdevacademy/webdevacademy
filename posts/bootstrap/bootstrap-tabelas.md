---
title: "Bootstrap 4: Como Criar Tabelas"
date: 2017-01-03T06:00:20+00:00
author: Ruan Carvalho
excerpt: Neste tutorial, você vai entender como trabalhar com tabelas no Bootstrap junto com alguns exemplos.
contentType:
  post
slug: "bootstrap-tabelas"
path: /tutoriais/bootstrap-tabelas/
embed:
  post
url:
  post
lightbox-url:
  post
testimonial:
  post
testimonial_author:
  post
dsq_thread_id:
  - "6325385488"
dsq_needs_sync:
  - "1"
featured_media: "https://res.cloudinary.com/webdevacademy/image/upload/c_scale,w_480/v1516676760/bootstrap/webdevacademy-bootstrap-4.png"
categories: [
  slug: "tutoriais"
]
tags: [
  slug: "bootstrap",
  slug: "iniciante",
]
---
O Bootstrap já traz, por padrão, alguns estilos para deixar as tabelas HTML bem estilizadas, e também com espaçamentos bem definidos.

As tabelas, com o Bootstrap, também conseguem se adaptar ao tamanho da página, ou seja, elas podem ser totalmente responsivas.

Neste tutorial, você vai entender como trabalhar com tabelas no Bootstrap junto com alguns exemplos.

<img class="aligncenter wp-image-1847 size-medium" src="http://media.webdevacademy.com.br/2015/10/bootstrap-tabelas-responsiva-800x450.png" width="800" height="450" />

&nbsp;

* * *

## Tabela Simples com o Bootstrap

Para criar uma tabela básica, mas já com um estilo inicial, você pode adicionar a **classe _.table_** na tag **<table>.**

<pre><code class="hljs html">&lt;code class="hljs html">&lt;table class="table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;...&lt;/th&gt;
      &lt;th&gt;...&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th&gt;...&lt;/th&gt;
      &lt;td&gt;...&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code>&lt;/code></pre>

O layout básico tem uma divisão superior em todos os elementos <td>. Esse trecho, com itens dentro das colunas, ficaria assim:

<img class="aligncenter size-medium wp-image-1850" src="http://media.webdevacademy.com.br/2015/10/bootstrap-tabela-simples-800x450.png" alt="" width="800" height="450" />

É uma boa prática colocar o <thead> e o <tbody> nas suas tabelas, para separar o cabeçalho e o rodapé da tabela. Isso também facilita a manipulação e organização dos conteúdos depois.

Nenhuma novidade aqui. Esses são os elementos HTML de tabelas comuns.

O que o Bootstrap faz é aplicar estilos a essas tags, com a classe .table.

* * *

## Como Fazer as Linhas &#8220;Zebradas&#8221;

Para colocar as linhas com cores alternadas, ou &#8220;zebradas&#8221;, você deve usar a **classe `.table-striped`** na tabela, e cada linha dentro do `<tbody>` receberá o estilo de cor.

<pre><code class="hljs html">&lt;table class="table table-striped"&gt;
 ...
&lt;/table&gt;</code></pre>

A tabela ficaria assim:

<img class="aligncenter size-medium wp-image-1851" src="http://media.webdevacademy.com.br/2015/10/bootstrap-tabela-zebrada-800x450.png" alt="" width="800" height="450" />

O nome dessa técnica é _table striping_, e isso também pode ser feito com CSS puro.

* * *

## Como Colocar Bordas na Tabela

Para colocar bordas na tabela, você deve usar a **classe `.table-bordered`** na marcação tabela, e todas as células receberão uma borda em todos os lados.

<pre><code class="hljs html">&lt;table class="table table-bordered"&gt;
 ...
&lt;/table&gt;</code></pre>

Nesse caso, a tabela ficaria assim:

<img class="aligncenter size-medium wp-image-1852" src="http://media.webdevacademy.com.br/2015/10/bootstrap-tabela-borda-800x450.png" alt="" width="800" height="450" />

* * *

## Tabela Responsiva com Bootstrap

Para fazer com que a tabela fique responsiva, você deve colocar toda a `<table>` dentro de uma `<div>` com a classe `.table-responsive`, para que ela possa ter a rolagem horizontal em _devices_ menores (resolução menor que 768px).

<pre><code class="hljs html">&lt;div class="table-responsive"&gt;
  &lt;table class="table"&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>

Nas telas maiores, não haverá diferença nenhuma na tabela.

* * *

## Como Colocar Efeitos

Para habilitar o efeito de destaque em uma linha (mouse over) basta adicionar a classe .table-hover na tabela.

<pre><code class="hljs html">&lt;table class="table table-hover"&gt;
 ...
&lt;/table&gt;</code></pre>

Para fazer a tabela ficar mais compactada, com menos espaçamento, adicione a classe .table-condensed na tabela.

<pre><code class="hljs html">&lt;table class="table table-condensed"&gt;
 ...
&lt;/table&gt;</code></pre>

Você também pode adicionar cores nas linhas, ou em células específicas, usando as **classes contextuais** que são: .success, .warning, .danger, .info, e .active.

<pre><code class="hljs html">...
&lt;tr class="active"&gt;
 &lt;td class="warning"&gt;Item em Alerta&lt;/td&gt;
&lt;/tr&gt;
...</code></pre>

Essas classes são muito úteis para chamar a atenção do usuário em informações específicas da tabela, ou que precisem de alguma ação.

* * *

## Exemplo Completo

Vamos ver um exemplo de uma tabela completa, com as classes do Bootstrap:

<pre><code class="hljs html">&lt;div class="container"&gt;
  &lt;h1 class="page-header"&gt;Tabelas com Bootstrap&lt;/h1&gt;
  &lt;div class="table-responsive"&gt;
    &lt;table class="table table-striped table-bordered table-hover"&gt;
      &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;#&lt;/th&gt;
        &lt;th&gt;Coluna 01&lt;/th&gt;
        &lt;th&gt;Coluna 02&lt;/th&gt;
        &lt;th&gt;Coluna 03&lt;/th&gt;
        &lt;th&gt;Coluna 04&lt;/th&gt;
      &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;th&gt;1&lt;/th&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;th&gt;2&lt;/th&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
          &lt;td&gt;Conteúdo&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="container"&gt;
 &copy; 2016 - Web Dev Academy
&lt;/div&gt;</code></pre>

Você pode ver esse exemplo funcionando no link abaixo:

<p style="text-align: center;">
  <a class="button" href="http://codepen.io/ruancarvalho/pen/apbNQb" target="_blank" rel="noopener">Demo no CodePen</a>
</p>

* * *

## Nunca Use Tabelas para Fazer Layouts!

Você viu até aqui que o Bootstrap deixa as tabelas com um visual e com espaçamentos muito bons.

Mas, **nunca use tabelas para fazer layouts, ou qualquer outro tipo de posicionamento.**

Pra isso, existe o [Grid System do Bootstrap](http://webdevacademy.com.br/tutoriais/ux/bootstrap-3-layouts-sistema-grids/).

As **tabelas servem apenas para exibir informações** tabulares. Como se fossem planilhas, ou relatórios.

Aqui na Academy tem vários tutoriais para você aprender a fazer layouts com o Bootstrap, usando o Grid System.

##