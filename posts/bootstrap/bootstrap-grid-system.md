---
title: "Bootstrap 4: Entendendo o Grid System"
slug: "bootstrap-grid-system"
path: "/tutoriais/bootstrap-grid-system"
date: "2018-02-22T06:00:14+00:00"
categories: [
  slug: 'tutoriais'
]
tags: [
  slug: 'bootstrap',
  slug: 'iniciante',
]
featured_media: 'https://res.cloudinary.com/webdevacademy/image/upload/c_scale,w_480/v1516676760/bootstrap/webdevacademy-bootstrap-4.png'
---

Neste tutorial, você vai aprender como fazer o download do Bootstrap 4 e entender como criar as pastas iniciais de um projeto.

O <a href="http://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a> é o framework mais utilizado para criar layouts e telas de sistemas web, dashboards, sites responsivos e sites comuns, também. Ele facilita muito o trabalho de front-end.

Ao final, você vai ter um ambiente com o Bootstrap 4 funcionando, e pronto para começar a criar o seu front. Além disso, vamos ver para quê que servem cada um dos arquivos que vêm com ele, e quais utilizar.

* * *

## Antes de Começar

Este tutorial foi feito para a versão 4 do Bootstrap. Se você estiver precisando aprender a versão 3, você deve seguir o [tutorial neste link](http://webdevacademy.com.br/tutoriais/bootstrap-grid-system/).

Eu vou assumir que você já tem um instalado o Node.js e o NPM, um terminal/linha de comando (como o Git Bash, PowerShell, Bash, etc.) e um bom editor de Textos (VS Code, Atom ou Sublime).

* * *

## Hello World com Bootstrap 4

Vamos começar colocando o Bootstrap pra funcionar em uma página bem simples. O clássico Hello World.

Por enquanto, não vamos baixar nada. Vamos usar o Bootstrap via CDN. Então, crie uma pasta para guardar o projeto:

```
$ mkdir hello-bootstrap
```

Abra a pasta e  use o NPM para iniciar um projeto em branco:

```
$ cd hello-bootstrap
$ npm init -y
```

Esse comando do NPM cria um arquivo _package.json_, com informações básicas sobre o projeto. Mas, não vamos editar nada, por enquanto. Por isso usamos a flag -y.

Agora, crie um arquivo HTML que vai ser o nosso _Hello World com Bootstrap_ e abra no editor de código (nesse caso, estou usando o VS Code):

```
$ code hello.html
```

Nesse arquivo, coloque a marcação abaixo. Não se preocupe em tentar entender tudo agora. Mais à frente, você vai saber pra quê servem cada uma dessas linhas:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <!-- meta tags obrigatorias -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Hello World com Bootstrap</title>

  <!-- CSS do Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css">
</head>
<body>
  <div class="container text-center">
    <h1 class="display-3 m-5">Hello, Bootstrap!</h1>
    <p class="lead">
      Use este documento como um template para iniciar qualquer projeto novo.<br>
      Tudo o que tem aqui é esse texto e um HTML inicial, bem básico.
    </p>
  </div>

  <!-- Primeiro o jQuery, depois o Popper.js, e depois o Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.js"></script>
</body>
</html>
```

Abra essa página em um navegador, para ver como fica:

<img class="wp-image-2601" src="https://res.cloudinary.com/webdevacademy/image/upload/bo_0px_solid_rgb:000000,e_shadow:40/v1515463411/bootstrap/hello-bootstrap.png" alt="Hello World com Bootstrap" width="1289" height="725" />

Pronto. Bootstrap funcionando.

Observe que não escrevemos nada de CSS. Mas, a página já ficou com um visual mais bacana do que o padrão, sem CSS.

Essa página, também, já está preparada para funcionar em celulares e tablets, já que usamos a meta tag de viewport e o CSS padrão do Bootstrap.

* * *

## Como o Bootstrap Funciona

Na página de Hello World, colocamos várias classes nas tags HTML. Não escrevemos nenhum CSS, mas o visual da página já está com alguns estilos.

Por exemplo, no código que fizemos tinham:

  * a classe `.text-center` serve para centralizar o texto na div;
  * a classe `.display-3` aumenta o tamanho do título e a `.m-5` coloca margens nele;
  * a classe `.lead` deixa o parágrafo com mais destaque;

Todas essas classes já vêm com o Bootstrap 4.

E é assim que o Bootstrap funciona: **de acordo com as classes que você colocar nos elementos HTML, o Bootstrap vai definir o visual e o comportamento daquele componente.**

Na maioria das vezes, é só colocar as classes CSS certas que você vai ter um componente visual.

Alguns componentes vão precisar de outros atributos a mais. Ou, também, de alguma marcação específica usando várias div&#8217;s em conjunto (como o Modal ou o Carousel).

O importante, até aqui, é entender que, usando as classes certas do Bootstrap você vai criar as telas dos seus projetos com muito menos esforço.

* * *

## Baixando e Configurando o Bootstrap

Vamos baixar uma cópia do Bootstrap 4 e usar essa instalação em um projeto.

Para o Bootstrap funcionar corretamente, é preciso usar duas _libs_ extras: **o jQuery e o Popper.js**  &#8211; senão alguns componentes não irão funcionar, e nem os efeitos deles.

Use o NPM para pegar essas libs:

```
$ npm install jquery --save
$ npm install popper.js --save
```

Agora, vamos baixar a versão 4 do Bootstrap, também com o NPM:

```
$ npm install bootstrap@4.0.0 --save
```

Esses downloads vão ficar em uma pasta chamada `node_modules`, que é do NPM. É essa pasta que será o endereço das _libs._

Agora, na pasta do seu projeto, copie o arquivo `hello-bootstrap.html` para criar um novo arquivo com o nome de `template.html`, e abra no editor:

```
$ cp hello-bootstrap.html template.html
$ code template.html
```

Vamos aproveitar a marcação do Hello World, e mudar só as referências do Bootstrap, do jQuery e do Popper.js.

Só que agora vamos usar os arquivos locais (baixados pelo NPM), ao invés de usar os links das CDN&#8217;s:

    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Template Bootstrap</title>
      <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">
    </head>
    <body>
      <h1>Template Bootstrap</h1>

      <script src="./node_modules/jquery/dist/jquery.slim.min.js"></script>
      <script src="./node_modules/popper.js/dist/popper.min.js"></script>
      <script src="./node_modules/bootstrap/dist/js/bootstrap.js"></script>
    </body>
    </html>

Agora, essa página serve como template inicial para outras páginas. Assim, você não vai precisar reescrever o HTML básico e os links do_s_ arquivos, quando for criar uma página nova.

Se você quiser, pode mudar os endereços das _libs_, caso deseje colocar em outra pasta.

O importante é que elas sejam carregadas na mesma ordem, e que o endereço esteja certo.

* * *

## Entendendo as Meta Tags, Links e Scripts

Vamos entender pra que servem as tags obrigatórias nas páginas com Bootstrap&#8230;

Observe na linha 1 o DOCTYPE:

    <!DOCTYPE html>

Este é o DOCTYPE para HTML5. **O Bootstrap precisa ter toda a marcação em HTML5** para exibir a página corretamente.

Agora, vamos as metatags…

    <meta charset="utf-8">

Esta tag indica ao browser que a página vair usar caracteres Unicode, para exibir letras com acentos e cedilha, por exemplo.

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

A metatag de viewport faz o site ocupar todo o espaço disponível na janela, tanto em celulares, como em tablets ou em computadores comuns.

Essa é a tag mais importante. É ela que possibilita o design responsivo e o mobile-first do Bootstrap.

Essas “meta-tags” servem para qualquer site, e não apenas quando você usar o Bootstrap.

Agora, vamos às referências:

    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css">

Essa é a referência ao CSS do Bootstrap.

Esse link é obrigatório. Sem ele, ou se estiver com o caminho errado, nada do Bootstrap vai funcionar.

    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./node_modules/popper.js/dist/popper.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.js"></script>

E essas são as referências ao jQuery, ao Popper.js e aos plug-ins do Bootstrap. **O jQuery deve sempre vir antes dos outros JS**. O Bootstrap depende dele e do Popper.js para funcionar.

O Popper.js é uma biblioteca JavaScript que serve para posicionar elementos como menus, tooltips e popovers.

Por fim, observe que eu coloquei as bibliotecas Javascript por último no HTML – isso é uma boa prática para diminuir a lentidão no carregamento da página.

* * *

## Entendendo os Arquivos do Bootstrap

Quando você faz o download do Bootstrap, tanto pelo NPM (pasta _dist_), ou de forma manual, você recebe uma estrutura de arquivos parecida com essa:

```
bootstrap/dist
├── css
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   └── bootstrap-reboot.min.css.map
└── js
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map

```

**Na pasta CSS**, ficam os arquivos dos **estilos visuais do Bootstrap e dos componentes**.

Para usar tudo que o Bootstrap tem, é só você importar o arquivo `bootstrap.css`, ou o `bootstrap.min.css`.

Caso você queira usar só o Grid System, você pode importar só o arquivo `bootstrap-grid.css`, ou `bootstrap-grid.min.css`.

**Na pasta JS**, ficam os arquivos com as funções dos **componentes do Bootstrap**, como os Menus, por exemplo. Para usar todos os componentes que o Bootstrap tem, é só importar o arquivo `bootstrap.js`, ou `bootstrap.min.js`.

Cada pasta possui uma versão padrão (os arquivos \*.css e \*.js), e uma versão “minificada” (os arquivos \*.min.css e \*.min.js) de cada script.

Atenção aqui:

**Você deve usar a versão padrão quando estiver desenvolvendo o projeto**, assim você vai poder ler, ou ter acesso, ao código-fonte do Bootstrap.

**E você deve usar a versão &#8220;minificada&#8221; (ou _minified_) quando for colocar seu projeto online**, ou seja, em produção.

O arquivo _minified_ é bem menor que o padrão, e economiza na utilização de banda.

* * *

## Próximos Passos…

Pronto. Agora você já tem o Bootstrap 4 funcionando.

Aqui você pôde ver a marcação básica com o HTML5, e as referências utilizadas em páginas com Bootstrap.

**É importante você entender para quê serve cada um desses itens**, e assim poder resolver problemas que possam surgir. Para criar outras páginas, basta copiar o template e começar a adicionar itens.

Daqui pra frente, você pode começar a trabalhar com os outros componentes do Bootstrap.