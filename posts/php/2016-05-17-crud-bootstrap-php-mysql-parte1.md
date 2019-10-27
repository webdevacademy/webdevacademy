---
pid: "1215"
title: 'CRUD com Bootstrap, PHP &#038; MySQL &#8211; Parte I'
date: 2016-05-17T09:00:39+00:00
author: Ruan Carvalho
excerpt: Neste tutorial, você vai criar o banco de dados para o nosso sistema de CRUD, criar um arquivo de configurações do sistema e, então, criar o script de conexão com o banco de dados em PHP.
contentType: post
path: /tutoriais/crud-bootstrap-php-mysql-parte1/
slug: crud-bootstrap-php-mysql-parte1
image: https://res.cloudinary.com/webdevacademy/image/upload/c_scale,h_315,w_600/v1510518274/crud-bootstrap-php_obgp74.png
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/c_scale,w_480,h_270/v1510518274/crud-bootstrap-php_obgp74.png
categories: ["Tutoriais"]
tags: ["Bootstrap", "PHP"]
---

Neste tutorial, você vai ver como deve ser esse banco de dados para o nosso sistema de CRUD e como criá-lo, executando o SQL pelo phpMyAdmin. 

Depois disso, vamos criar um arquivo de configurações para usar em todo o sistema. E ,por fim, vamos criar o script de conexão com esse banco de dados, usando PHP.

* * *

## Antes de Começar

Eu vou assumir que você já está com o seu ambiente de desenvolvimento funcionando.

Aqui, nós vamos utilizar o XAMPP, que já traz o PHP, o MySQL (ou MariaDB), e o phpMyAdmin para manipular o banco de dados.

Se você ainda não estiver com o ambiente pronto, é só ver a [introdução desta série](/tutoriais/crud-bootstrap-php-mysql/) e instalar os pré-requisitos.

* * *

## Passo 1: Crie o Banco de Dados e a Tabela de Clientes

Abra o phpMyAdmin do XAMPP e crie um banco de dados. Eu coloquei o nome como **wda_crud**.

Se preferir, pode fazer direto via SQL:

```sql
CREATE DATABASE wda_crud;
```

Use o SQL abaixo para criar a tabela &#8216;_customers_&#8216; nesse banco de dados.

```sql
CREATE TABLE customers (
  id int(11) NOT NULL,
  name varchar(255) NOT NULL,
  cpf_cnpj varchar(14) NOT NULL,
  birthdate date NOT NULL,
  address varchar(255) NOT NULL,
  hood varchar(100) NOT NULL,
  zip_code int(8) NOT NULL,
  city varchar(100) NOT NULL,
  state varchar(100) NOT NULL,
  phone int(13) NOT NULL,
  mobile int(13) NOT NULL,
  ie int(11) NOT NULL,
  created datetime NOT NULL,
  modified datetime NOT NULL
);

ALTER TABLE customers
  ADD PRIMARY KEY (id);
  
ALTER TABLE customers
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
```

Vamos ter os mesmos campos de cliente usados em notas fiscais nessa tabela, assim ela vai servir para um cadastro de clientes mais útil.

Então, vamos ter os seguintes campos:

|    | campo | tipo | descrição |
|---|---|---|---|
| PK | **id** |  int | codigo no sistema |
|    | name |  varchar(255) | nome do cliente|
|    | cpf_cnpj |  varchar | cpf ou cnpj |
|    | birthdate |  date | data de nascimento |
|    | address |  varchar | endereço |
|    | hood |  varchar | bairro |
|    | zip_code |  int | cep |
|    | city |  varchar | cidade |
|    | state |  varchar | estado |
|    | phone |  int | telefone |
|    | mobile |  int | celular |
|    | ie |  int | inscrição estadual |
|    | created |  datetime | data de cadastro |
|    | modified |  datetime | data da última atualização |

Eu sempre recomendo que você traduza os nomes das tabelas e dos campos para o inglês, ao criar um banco de dados. 

Isso facilita muito na hora de escrever as consultas, e no código. E, você acaba ainda aprendendo um pouco mais do idioma.

* * *

## Passo 2: Crie o Arquivo de Configurações do Sistema

Crie um arquivo chamado `config.php`, **na pasta principal**, e coloque o código a seguir:

```php
<?php

/** O nome do banco de dados*/
define('DB_NAME', 'wda_crud');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', '');

/** nome do host do MySQL */
define('DB_HOST', 'localhost');

/** caminho absoluto para a pasta do sistema **/
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
	
/** caminho no web server para o sistema **/
if ( !defined('BASEURL') )
	define('BASEURL', '/crud-bootstrap-php/');
	
/** caminho do arquivo de banco de dados **/
if ( !defined('DBAPI') )
	define('DBAPI', ABSPATH . 'inc/database.php');

```

Este arquivo de configurações é baseado no _wp-config_ do WordPress.

Modifique esses valores de acordo com o seu ambiente de desenvolvimento, ou de produção.

Algumas constantes importantes:

* **ABSPATH** - define o caminho da pasta do projeto, no sistema de arquivos.

Ela vai ser usada para chamar os outros arquivos e templates via PHP (usando o `include_once`), já que ela guarda o caminho físico da pasta.

* **BASEURL** - define a URL do projeto no servidor web.

Esse valor deve ser igual ao nome da pasta que você criou no começo do projeto. <span style="line-height: 1.5;">Ela será usada para montar os links da aplicação, já que ela guarda a URL inicial.</span>

Depois, vamos adicionar mais configurações. Por enquanto, essas aí são suficientes para conectar com o banco.

Você pode criar outros, se precisar.

* * *

## Passo 3: Implemente o script de Conexão com o Banco de Dados


Crie um arquivo chamado `database.php`, na pasta `inc` do seu projeto, e coloque o código a seguir:

```php
<?php
// ativa o display de errors graves, em modo strict
mysqli_report(MYSQLI_REPORT_STRICT);

function open_database() {
	try {
		$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
		return $conn;
	} catch (Exception $e) {
		echo $e->getMessage();
		return null;
	}
}

function close_database($conn) {
	try {
		mysqli_close($conn);
	} catch (Exception $e) {
		echo $e->getMessage();
	}
}
```

Este será um arquivo de funções do banco de dados. Tudo que for relativo ao BD estará nele.

A primeira função &#8211; **_open_database()_** &#8211; abre a conexão com a base de dados, e retorna a conexão realizada, se der tudo certo. Se houver algum erro, a função dispara uma exceção, que pode ser exibida ao usuário.

Já a segunda função &#8211; **_close_database($conn)_** &#8211; fecha a conexão que for passada. Se houver qualquer erro, a função dispara uma exceção, também.

**Observe as constantes** **sendo usadas** (<span class="pl-c1">DB_HOST</span>, <span class="pl-c1">DB_USER</span>, <span class="pl-c1">DB_PASSWORD</span>, <span class="pl-c1">DB_NAME). Dessa forma, c</span><span style="line-height: 1.5;">aso você mude de servidor ou de BD, basta alterar o arquivo de configurações; </span><span style="line-height: 1.5;">sem </span><span style="line-height: 1.5;">precisar mexer no código principal.</span>

* * *

## Passo 4: Teste a Conexão

Agora sim, vamos ver se o banco de dados está conectado ao CRUD.

Crie um arquivo chamado _index.php_, **na pasta principal**, e coloque o código a seguir:

``` php
// index.php
<?php require_once 'config.php'; ?>
<?php require_once DBAPI; ?>

<?php 
	$db = open_database(); 
	
	if ($db) {
		echo '<h1>Banco de Dados Conectado!</h1>';
	} else {
		echo '<h1>ERRO: Não foi possível Conectar!</h1>';
	}
?>
```

Para entender, rapidamente:

Primeiro, adicionamos o arquivo de configurações e o arquivo de funções do banco de dados (ou API de Banco de Dados), usando o require_once.

Depois, usamos a função para abrir a conexão. E, então, é feito um teste para saber se a conexão existe: _if ($db) &#8230;_

Vamos ver se funciona&#8230; Acesse o CRUD pelo navegador:

<p style="text-align: center;">
  <a class="btn btn-primary" href="http://localhost/crud-bootstrap-php" target="_blank" rel="noopener">http://localhost/crud-bootstrap-php</a>

**Se aparecer a mensagem <span class="pl-pds">&#8216;</span>Banco de Dados Conectado!<span class="pl-pds">&#8216;, sua conexão está OK.</span>**

<img class="img-thumbnail img-responsive aligncenter wp-image-1428 size-medium" src="http://media.webdevacademy.com.br/2016/05/crud-bootstrap-php-parte1-800x450.png" alt="crud-bootstrap-php-parte1" width="800" height="450" />

Senão, verifique se o MySQL está iniciado e verifique se as credenciais estão corretas (<span class="pl-c1">DB_HOST</span>, <span class="pl-c1">DB_USER</span>, <span class="pl-c1">DB_PASSWORD</span>, <span class="pl-c1">DB_NAME). Qualquer item errado causa falha na conexão.</span>

Até aqui, seu projeto deve estar assim:

```
crud-bootstrap-php/
  css/
  fonts/
  inc/
    database.php
  js/
  config.php
  index.php
```

* * *

## Próximos Passos

No próximo tutorial, vamos implementar os arquivos de template do cabeçalho (header) e do rodapé (footer) para usar em todo o projeto.

Também vamos criar uma página inicial com os botões de acesso para as funcionalidades do CRUD.