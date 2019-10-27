---
pid: "20190909"
title: 'In-order em uma Binary Tree (com JavaScript )'
date: '2019-09-08T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/tree-inorder-traversal-javascript/
slug: tree-inorder-traversal-javascript
featured_media: https://assets.leetcode.com/explore/cards/data-structure-tree/img
categories: ['Artigos']
tags: ['Algoritmos']
---

Percorrer uma árvore binária é chamado de ***traversal***, ou _traverse a tree_.

Basicamente, é passar por cada _node_ - uma única vez - e fazer alguma operação (mostrar o valor, por exemplo).

Existem três formas principais (algoritmos) de fazer isso: ***Pre-order***, ***Pre-order*** e ***Post-order***.

----

## Pre-order Traversal

Na ***Pre-order traversal***, você deve passar pelo _root_ primeiro. Depois, percorre a parte esquerda (***left subtree***, ou sub-árvore esquerda).

Por fim, percorre a parte direita (***right subtree***, ou sub-árvore direita).

Ou seja: raiz, esquerda, direita.

```js
/**
 * Definicao de um Node para uma Binary Tree.
 */
function TNode(value) {
  this.value = value;
  this.left = this.right = null;
}

var preorderTraversal = function(root) {
    let output = [];
    let stack = [root];
    
    while (stack.length > 0) {
      const node = stack.pop();
      
      if (!node) continue;
      output.push(node.value)
        
      if (node.right) {
        stack.push(node.right)
      }      
      if (node.left) {
        stack.push(node.left)
      }
    }
    
    return output;
};

// Exemplo de uso
let node = new TNode(15);
```

----

## In-order Traversal

----

## Post-order Traversal

----

## Recursive or Iterative

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