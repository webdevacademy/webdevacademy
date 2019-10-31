---
pid: "20191030"
title: 'Binary Tree com JS'
date: '2019-10-30T06:00:14+00:00'
author: Ruan Carvalho
excerpt: ''
contentType: post
path: /artigos/binary-tree-javascript
slug: binary-tree-javascript
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binary-tree-100', 'binary-tree-200', datastructures-100]
video: ""
---

## Exemplo de Node para Binary Tree

Os nodes, em uma Binary Tree, devem ter: um **left child**, um **right child**, o **valor** que será guardado e, se precisar, um **parent** para apontar para o _node_ superior.

```js
const TreeNode = function(value) {
  this.left = this.right = null;
  this.parent = null; // (opcional)
  this.value = value;
}
```

Para criar uma instância:

```js
let item = new TreeNode(15);
```
----

## Exemplo de Binary Tree com JavaScript

A estrutura da Binary Tree guarda apenas o node raiz. A partir dele é que você poderá acessar os outros:

```js
const BinaryTree = function(root) {
  this.root = root;
}
```

Crie o primeiro node da binary tree. 

```js
let rootNode = new TreeNode(15);
```

Inicialize a binary tree com o node raiz:

```js
let tree = new BinaryTree(rootNode);
```

Você pode criar, também, mais nodes como filhos do primeiro node.

```js
rootNode.left = new TreeNode(30);
rootNode.right = new TreeNode(45);
```

Esse exemplo cria uma Binary Tree assim:
```
   15
  /  \
 30  45
```

----