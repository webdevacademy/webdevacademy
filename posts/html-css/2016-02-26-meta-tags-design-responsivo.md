---
title: As 3 Meta Tags Essenciais para o Design Responsivo
date: "2016-02-26T08:00:20+00:00"
author: Ruan Carvalho
excerpt: |
  Neste artigo, você vai entender para que servem cada uma das meta tags que são usadas em páginas com design responsivo, principalmente a de viewport.
contentType: post
path: /artigos/meta-tags-design-responsivo/
slug: meta-tags-design-responsivo
dsq_thread_id:
  - "6325385486"
categories: ['Artigos']
tags: ['HTML & CSS']
featured_media: "https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg"
---
Você já deve ter visto na marcação de alguns sites (principalmente os que usam Bootstrap) que tem alguns itens de HTML5 e meta tags.

Vamos entender alguns desses itens, que são essenciais para obter um design responsivo, e devem estar em cada página do website:

* * *

## O DOCTYPE

```html
<!DOCTYPE html>
```

Este é o DOCTYPE. Vários frameworks precisam ter a **marcação em HTML5** para exibir tudo corretamente.

## O Charset

```html
<meta charset="utf-8">
```

Esta tag indica ao _browser_ que estamos usando o conjunto de caracteres Unicode, para exibir acentos e cedilha, por exemplo.

* * *

## Lidando com o IE

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

Esta tag força o IE a usar as definições de CSS mais recentes, e evita que ele quebre o visual, no Modo de Compatibilidade.

* * *

## O Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

A tag de _viewport_ faz o site ocupar todo o espaço disponível na janela, seja em celulares, tablets ou PC’s. **É a tag mais importante.**

* * *

## Exemplo Completo

Vamos ver um exemplo completo dessas tags aplicadas em uma página:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">	  
  <title>Template Resposivo</title>
</head>
<body>
  <h1>Hello World, com HTML!</h1>
</body>
</html>
```