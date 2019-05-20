---
pid: "181"
title: Migrando as Páginas do Drupal para o WordPress
date: 2014-02-11T08:00:15+00:00
author: Ruan Carvalho
excerpt: Em um dos meus projetos, tive que migrar um site de um cliente que foi feito em Drupal 6, para o Wordpress 3. Veja, neste post, uma forma de automatizar a importação e não ter que copiar manualmente cada página.
contentType: post
guid: http://webdevacademy.com.br/?p=181
path: /artigos/migrar-paginas-drupal-wordpress/
slug: migrar-paginas-drupal-wordpress
dsq_thread_id:
  - "6327155281"
categories: ['Artigos']
tags: ['WordPress']
featured_media: "https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg"
---
Em um dos meus projetos, tive que migrar um site de um cliente que foi feito em Drupal 6, para o WordPress 3.

Havia duas maneiras de fazer: a manual, e a automática. Logicamente que eu prefiro a automática, mas há um problema: **Não encontrei bons plugins para fazer a exportação/importação.**

Já estava começando a copiar tudo manualmente, criando cada post, quando, finalmente, encontrei um script SQL em um blog que facilitou a migração de páginas e posts para a base de dados do WordPress.


****

## Script SQL para a Migração

```sql
INSERT INTO novosite.wp_posts (
    ID,
    post_author,
    post_date,
    post_date_gmt,
    post_content,
    post_title,
    post_excerpt,
    post_name,
    post_modified,
    post_modified_gmt,
    post_type
)

SELECT
    node.nid,
    node.uid,
    FROM_UNIXTIME(node.created),
    FROM_UNIXTIME(node.created),
    node_revisions.body,
    node.title,
    node_revisions.teaser,
    concat('arquivo/', node.nid),
    FROM_UNIXTIME(node.changed),
    FROM_UNIXTIME(node.changed),
    'post'
FROM siteantigo.node, siteantigo.node_revisions
WHERE node.type = 'noticia' AND node.nid = node_revisions.nid
```

É um script SQL que você deve executar na base de dados nova.

****

## Algumas observações

  * Este script é extremamente simples e importa apenas os nodes do Drupal. Categorias e Comentários não serão importados.
  * A linha que contém **&#8216;post&#8217;** importará os nodes para posts do WordPress. Se você quiser importar para Páginas, mude-a para **&#8216;page&#8217;**
  * **_sitenovo_** é o nome da base de dados do novo site. _**siteantigo**_ é o nome da base do site que será importado.
