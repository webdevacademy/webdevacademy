---
pid: "20190907"
title: 'Binary Tree (com JavaScript)'
date: '2019-09-07T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/binary-tree-javascript/
slug: binary-tree-javascript
featured_media: https://assets.leetcode.com/explore/cards/data-structure-tree/img
categories: ['Artigos']
tags: ['Algoritmos']
---
Uma ***tree*** (árvore) é uma estrutura de dados muito usada pra representar estruturas de hierarquia.

Toda _tree_ é composta por um conjunto de ***nodes*** ("nodos", "nós", ou "folhas") que são conectados por ***edges*** (os vértices, como se fossem os "galhos da árvore").

Cada _node_ tem um ***parent*** (ou nó pai) e uma lista de referência para os outros _nodes_, que são chamados de ***children*** (filhos), ou ***child nodes***.

O **primeiro node** de uma _tree_ é o ***root*** (raiz), e é o único que não tem _parent_ (ou seja, _null_).

----

## Entendendo as Binary Trees

***Binary Tree*** (árvore binária) é uma das implementações de árvores. 

Em uma _binary tree_ cada _node_ tem - **no máximo** - dois _children_ (filhos), que são definidos como o ***left child*** (nó/filho esquerdo) e o ***right child*** (nó/filho direito).

Existem outros tipos de _trees_, mas a _Binary Tree_ é a mais usada.

**Se algum _node_ tiver mais de dois _children_, ela deixa de ser uma _binary tree_**.

Quando uma **_Binary Tree_** é **ordenada**, ela passa a ser uma ***Binary Search Tree***, ou **(BST)**, que vamos ver em outro artigo.

----

## Exemplo de Node para Binary Tree

```js
/**
 * Definicao de um Node para uma Binary Tree.
 */
function TNode(value) {
  this.value = value;
  this.left = this.right = null;
  // this.parent = null; (opcional)
}

// Exemplo de uso
let node = new TNode(15);
```

Os nodes, em uma Binary Tree, devem ter **um left child**, **um right child**, **o dado em si** e, se precisar, um parent para apontar para o _node_ superior.

----

## Exemplo de Binary Tree com JavaScript

```js
/**
 * Definicao de uma Binary Tree em JS.
 */
function TBinaryTree(root) {
  this.root = root;
}

// Crie os nodes para a arvore
// o primeiro será a raiz
let firstNode = new TNode(15);
let secondNode = new TNode(30);
let thirdNode = new TNode(45);

// Defina os nodes como filhos do primeiro
firstNode.left = secondNode;
firstNode.right = thirdNode;

// Inicialize a binary tree com o node raiz
let tree = new TBinaryTree(firstNode);
```

----


Pra trabalhar bem com as _binary trees_, você deve entender os seguintes tópicos:

* o conceito de _tree_ e de  _binary tree_; (que foi este artigo)
* saber implementar as funções de _traversal_; 
* usar recursividade pra resolver problemas com _binary-trees_;