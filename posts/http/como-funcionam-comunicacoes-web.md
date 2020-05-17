---
pid: "283"
title: "Entendendo as Comunicações Web"
slug: "como-funcionam-comunicacoes-web"
path: "/artigos/como-funcionam-comunicacoes-web"
date: "2014-02-28"
categories: [ 'Artigos' ]
tags: [ 'HTTP' ]
featured_media: 'https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg'
video: ""
---

Neste artigo você vai conhecer os itens que fazem funcionar qualquer site ou aplicação web, que são: o servidor, o browser (ou client) e o HTTP.

Todos estes itens servem como base para entender a arquitetura de todas as comunicações na web.

Vamos ver as responsabilidades do web server com as requisições e conhecer as onde que o browser se encaixa nesse mecanismo de interação com o usuário.

----
## Como Funcionam as Comunicações na Web

Toda aplicação web tem dois componentes principais:

* **O Client** – é o que o _browser_ apresenta na tela. É o front-end que realiza as interações com o usuário (entrada de dados, etc.) e envia os dados para o server, para processamento. Também pode ser conhecido como front-end ou interface de usuário.

* **O Server** – é quem responde às requisições dos _clients_ para páginas específicas. Ele responde com uma página HTML que possui as instruções (as tags HTML) de como gerar a interface de usuário. Também pode conhecido como back end, ou web server.

O browser (client) e o web server se comunicam usando o HTTP. 

HTTP é a sigla para **Hypertext Transfer Protocol** e significa protocolo de transferência de hipertexto. É um protocolo de comunicação em texto para redes de computadores. Ele utiliza a porta 80.

Se o server possuir um certificado de segurança, o cliente e o server podem usar o HTTP Secure (HTTPS) para autenticar o servidor e criptografar as comunicações entre eles (afinal você não iria querer que alguém interceptasse seu número do cartão de crédito, certo?!). O HTTPS funciona na porta 443.

As comunicações normalmente acontecem da seguinte forma:

1. O usuário digita um endereço, como http://www.webdevacademy.com.br, no browser

1. O browser conecta com o web server, usando o HTTP e envia uma requisição GET, por exemplo a GET / (que serve para pedir a página inicial)

1. O web server processa a página que foi requisitada. A partir daí, ele pode retornar um HTML estático ou arquivos de imagem, ou pode executar algum código server-side (como PHP, ASP.NET, Java, etc.) que realiza algumas tarefas ou conecta com um banco de dados, por exemplo.

1. Agora, o web server usa o HTTP para enviar uma resposta de volta para o browser. Existem vários tipos de resposta que o server pode enviar, dependendo da situação:
    1. Se a página foi processada com sucesso, o server retorna um código de status 200, junto com o documento HTML;
    1. Se o server não encontrou a página, ele retorna o código 404;
    1. Se o usuário solicitou uma página desatualizada, ou realçada, o server retorna o código 302 e a nova URL para que o browser navegue para a página correta (é isso que chamamos redirecionamento);

1. Finalmente, o browser do usuário processa a resposta exibindo a página HTML (se o código foi 200),  mostrando um erro na tela (se o código foi 404), ou carregando uma página diferente (se o código foi 302), por exemplo. As outras respostas do server são tratadas de forma parecida pelo browser, dependendo do tipo de cada uma.

Cada um desses passos se repetem toda vez que o usuário clica em um link ou em um botão da página.

Vamos ver, agora, um pouco das responsabilidades e limitações de um web browser e de um web server…

----
## O que o Web Server Faz

O web server (ou servidor web) deve disponibilizar o conteúdo para o browser exibir para o usuário.

De uma forma mais detalhada, o server envia arquivos estáticos como, por exemplo, um arquivo HTML ou arquivos de imagem, e isso sempre através de uma conexão HTTP (ou HTTPS) com um browser.

Os web server mais modernos fazem um pouco mais. Quando um desses web servers recebe uma requisição, eles podem fazer algumas das ações a seguir, por exemplo:

1. **Verificar se a requisição está com um formato correto** – pode acontecer de um client malicioso enviar requisições mal formadas para comprometer o funcionamento de um web server. O web server deve ser capaz de detectar isso e responder de forma adequada (normalmente ele ignora a requisição).

1. **Autenticar a si mesmo** – se o server tiver um certificado SSL, e a requisição for feita com HTTPS, o browser usa esse certificado para autenticar o server, ou seja, verificar se é ele mesmo. O web server também criptografa o conteúdo antes de enviar para o browser.

1. **Autenticar o usuário** – se o conteúdo precisar de autenticação, o web server verifica se o usuário enviou suas credenciais (login e senha). Se o usuário não estiver autenticado, o server redireciona para um formulário de autenticação.

1. **Autorizar o usuário** – depois de autenticar o usuário, o web server verifica se ele tem permissões para acessar o conteúdo que foi requisitado.

1. **Determinar como processar uma requisição** – se o browser solicitou um conteúdo estático ou precisa só verificar se o cache pode ser usado, o web server pode responder diretamente. Se o browser solicitar uma página PHP ou ASP.NET, por exemplo, então o server deve repassar a requisição para o programa específico.

1. **Processar erros** – se um server não puder processar a requisição do usuário, ele disponibiliza todas as informações sobre o erro para o browser.

1. **Fazer Cache da resposta** – os web servers podem fazer cache da resposta para melhorar o tempo de resposta das próximas requisições. Eles também disponibilizam as informações do cache para os browsers, para que eles saibam por quanto tempo devem manter o conteúdo em cache.

1. **Comprimir a resposta** – antes de enviar a página para o browser, o web server pode comprimir, ou compactar, o conteúdo para reduzir a largura de banda necessária para enviar tudo.

1. **Registrar o Log de acesso** – os web servers costumam registrar informações de utilização para questões de segurança e para monitorar sua performance.

----
## O que o Browser Faz

Apesar de serem os programas mais utilizados na Web, a função dos browsers é bastante simples:

1. **Enviar requisições para o web server** – se o usuário digitar http://www.webdevacademy.com.br, o browser procura o endereço DNS (Domain Name System) www.webdevacademy.com.br e usa o HTTP para conectar ao server desse site, e requisita a página inicial.

1. **Autenticar o server** – se o server tiver um certificado SSL e a requisição for feita com HTTPS, o browser usa o certificado para autenticar o server e então pode desfazer a criptografia das futuras comunicações.

1. **Processar a resposta** – se o server tiver enviado um HTML, o browser vai buscar os objetos embutidos, como as imagens, vídeos ou arquivos referenciados no HTML. Se o server enviou um erro, redirecionamento, ou alguma outra resposta, o browser responde de forma apropriada.

1. **Exibir o HTML e os objetos** – os browsers usam os padrões HTML para definir como exibe uma página para o usuário. Como o HTML pode conter objetos embutidos, como um MP3, o browser pode ter que carregar dezenas de objetos e arquivos para renderizar uma única página.

1. **Executar os scripts de cliente** – os scripts client, como os que são escritos em Javascript, possibilitam criar páginas interativas e dinâmicas sem a necessidade de recarregar a página, e é o browser que interpreta esses códigos.

----
## Resumindo…

O web server é responsável por receber as requisições (requests) e enviar uma resposta apropriada.

O browser é responsável por exibir informações para o usuário, coletar dados, e enviar dados e requisições para o web server.

O HTTP é um protocolo de comunicação em texto que é usado para a comunicação entre browsers e web servers, usando TCP e a porta 80 por padrão.

Depois, você pode aprender o básico do HTTP e como ele é usado para processar as requisições de usuários.