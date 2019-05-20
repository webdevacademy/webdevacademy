---
title: "Entendendo o Bootstrap"
slug: "bootstrap-introducao"
path: "/artigos/bootstrap-introducao"
date: "2016-07-28T06:00:14+00:00"
categories: [ 'Artigos' ]
tags: [ 'Bootstrap' ]
featured_media: 'https://res.cloudinary.com/webdevacademy/image/upload/c_scale,w_480/v1516676760/bootstrap/webdevacademy-bootstrap-4.png'
---

Atualmente, em projetos web, é cada vez mais necessário utilizar os conceitos de mobile-first, e design responsivo. Todos eles em conjunto com HTML5, CSS3 e Javascript.

E o Bootstrap nos ajuda a implementar tudo isso.

Neste artigo, você vai ter uma visão geral do Bootstrap, um framework de front-end que é ótimo para criar interfaces para aplicações web e para web sites.

* * *

## O Que é o Bootstrap?

O site oficial define assim:

> O Bootstrap é o framework de HTML, CSS e Javascript mais popular da web para desenvolver projetos responsivos, e orientados a mobile.

E eu costumo definir assim:

> O Bootstrap é um framework de front-end que agiliza o desenvolvimento de sites e aplicações web.

Alguns autores também o definem como um framework de CSS. Enfim, o que interessa mesmo é que ele facilita o nosso trabalho.

O Bootstrap foi criado na sede do Twitter, em 2010, por [Mark Otto](https://twitter.com/mdo) e [Jacob Thornton](https://twitter.com/fat).

De início, era apenas uma ferramenta interna do pessoal do Twitter para construir aplicações, e era chamado de Twitter Blueprint.

Depois, o framework foi publicado com código aberto (open-source) e se chamava Twitter Bootstrap, que você já deve ter visto em algum lugar. A nomenclatura atual é apenas Bootstrap.

Com o Bootstrap, você pode utilizar vários códigos em HTML e CSS já padronizados.

Estes códigos e estilos definem a tipografia, os formulários, botões, tabelas, layouts, navegação, elementos de interface e de interação com o usuário, e várias outras coisas.

Bom, de uma forma mais resumida:

*   O Bootstrap um é conjunto de classes e componentes para criar interfaces de usuário para Web (e para Mobile);
*   O Bootstrap define padrões e estilos CSS, Componentes de UI reutilizáveis e plugins para jQuery;
*   É um dos frameworks de front-end mais populares do mundo, atualmente;

O Bootstrap é _mobile-first_ e responsivo. Isso significa que você deve primeiro projetar e desenvolver para dispositivos móveis, e depois passar para as telas maiores.

![Progressive Enhancement, ou Mobile First](http://media.webdevacademy.com.br/2016/06/progressive-enhancement-800x303.png)

Progressive Enhancement, ou Mobile First

Dessa forma é que você consegue aproveitar, ao máximo, o conceito de design responsivo.

Normalmente, as pessoas fazem o inverso, que não é um problema, mas o ideal é você seguir os conceitos de _mobile-first_.

* * *

## O Que Você Precisa para começar?

Para trabalhar com o Bootstrap, você precisa ter conhecimentos de HTML e CSS.

**Só isso.**

Também é bom conhecer um pouco de Javascript. Mas, não precisa ser nenhum mestre na área.

Se você souber como escrever uma `<div>`, souber como colocar classes e entender como elas funcionam, você já terá o suficiente para trabalhar bem com o Bootstrap.

Além disso, as duas únicas ferramentas que você precisa, para criar um front-end com o Bootstrap, são um editor de textos e um browser atualizado.

Eu costumo recomendar dois editores de código, que eu utilizo há algum tempo. São esses:

*   **Sublime Text Editor** – um ótimo editor que aumenta muito a nossa produtividade ao escrever código. É o favorito dos desenvolvedores, atualmente. O Sublime é pago, mas pode ser testado gratuitamente. Baixe em [http://www.sublimetext.com](http://www.sublimetext.com)
*   **Visual Studio Code** **(VS Code)** – um editor novo e leve da Microsoft feito para web devs. Também ajuda muito a aumentar nossa produtividade. Bastante indicado, principalmente se você não quiser pagar pelo Sublime. Tem para Win, Mac e Linux. Você pode baixar no site [https://code.visualstudio.com](https://code.visualstudio.com)

Minha sugestão é que você **escolha o VS Code**, se possível. E se você já tiver um editor preferido, pode usá-lo sem problemas.

O outro programa que você precisa é um browser, ou navegador, atualizado. **Sugiro que você use o Google Chrome** para ajudar a implementar o front-end.

O motivo é ele tem a melhor ferramenta para analisar a marcação das páginas e, também, código Javascript, que é o Chrome Dev Tools.

Assim, fica mais fácil encontrar os possíveis problemas, e depois verificar como está a performance da página.

* * *

## O Que Você Pode Fazer com o Bootstrap?

Com o Bootstrap você pode fazer sites estáticos completos, pode fazer o front-end de sites dinâmicos, pode fazer o front-end de para sistemas web, temas para CMS, protótipos, e várias outras coisas. 

![CRUD com Bootstrap 3](http://media.webdevacademy.com.br/2015/03/crud-com-bootstrap-1024x640.png)

Quando eu “digo” front-end, me refiro à parte com que o usuário vai interagir e irá visualizar. Seria o visual, o layout, ou a implementação do design.

Se você for fazer um site estático, você pode usar, sem problemas, apenas o Bootstrap (como no caso de _landing pages_, por exemplo).

Agora, se você for fazer sites dinâmicos, ou uma aplicação web completa, então não… só com o Bootstrap não é possível. Nesses casos você vai precisar ter um _backend_.

Ou seja, **o Bootstrap não acessa banco de dados**; não faz cadastros; não faz validações sozinho; não faz requisições ao servidor e não gera gráficos. Ele faz apenas o _front-end_. Afinal ele é HTML, CSS e JavaScript.

É possível fazer protótipos de telas muito bons, e funcionais. Aliás, o Bootstrap é ótimo para isso. Assim você pode criar um _mockup_, ou um _wireframe_ já em HTML e CSS e poderá testá-lo, para depois alterar o visual (se necessário) e integrar com o _backend_.

Você pode usar o Bootstrap com qualquer linguagem de _server-side_ (ou seja, de _backend_). Por exemplo, você pode usar o Bootstrap com PHP, C#, Java, Ruby, Python, etc.

Você pode usar com frameworks também, por exemplo: Bootstrap com Laravel; ou Bootstrap com Rails; Bootstrap com ASP.NET MVC; Bootstrap com AngularJS, Bootstrap com WordPress, e por aí vai.

Eu costumo usá-lo com o Laravel, para sistemas web, e com o WordPress para fazer temas para sites.

![exemplo one page layout responsivo](http://media.webdevacademy.com.br/2015/09/one-page-layout-responsive-woothemes.jpg)

O Bootstrap já possui um visual padrão, mas você pode personalizá-lo completamente, de acordo com o seu design.

* * *

## Você Sempre Vai Trabalhar com Classes

No Bootstrap, existem várias classes CSS que transformam a marcação HTML em componentes visuais.

Você vai trabalhar muito com as classes do Bootstrap. Na verdade, tudo no framework se resume a estas classes e suas combinações.

Por exemplo: ao adicionar as classes `btn btn-default` a um link:

``` html
<a class="btn btn-default" href="index.html">Home</a>
```

Com essa marcação você terá criado um botão, como um componente. Simples assim.

![bootstrap-botao-simples](http://media.webdevacademy.com.br/2014/01/bootstrap-botao-simples-800x342.png)

Nos outros tutoriais, você vai poder conhecer várias classes de vários componentes. Mas, a regra básica é a mesma:

> Adicione classes CSS ao HTML e faça as combinações para obter um componente visual.

O Bootstrap também modifica o visual de alguns elementos HTML por padrão, como os cabeçalhos (h1 até h6) e inputs. Mas, você pode sempre sobrescrever qualquer estilo com o seu CSS.

**Você nunca estará preso ao visual do framework.**

Lembre-se disso.

* * *

## Próximos Passos…

Agora que você já entende um pouco pra quê que serve o Bootstrap, já pode [começar a usar o framework](/tutoriais/bootstrap-3-como-comecar/) e depois aprender a usar os [componentes visuais](/tag/bootstrap/), o [Grid System](/tutoriais/ux/bootstrap-3-layouts-sistema-grids/) e os [componentes de JavaScript](/tag/bootstrap/) para criar sites responsivos ou sistemas web.

Mas, lembre-se: o framework funciona para criar a estrutura das suas telas e layouts. Ou seja, a forma como elas vão estar organizadas e como os componentes estarão dispostos.