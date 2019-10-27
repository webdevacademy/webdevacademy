---
pid: "20190908"
title: 'Pre-order em uma Binary Tree (com JavaScript)'
date: '2019-09-08T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/tree-preorder-traversal-javascript/
slug: tree-preorder-traversal-javascript
featured_media: https://assets.leetcode.com/explore/cards/data-structure-tree/img
categories: ['Artigos']
tags: ['Algoritmos']
---

Percorrer uma árvore binária é chamado de ***traversal***, ou _traverse a tree_.

Basicamente, é passar por cada _node_ - uma única vez - e fazer alguma operação (mostrar o valor, por exemplo). Pode-se entender como **"percorrer a árvore"**, também.

Existem três formas principais (algoritmos) de fazer isso: ***Pre-order***, ***Pre-order*** e ***Post-order***.

----

## Pre-order Traversal (Iterativa)

Na ***Pre-order traversal***, você deve passar pelo _root_ primeiro. 

Depois, percorre a parte esquerda (***left subtree***, ou sub-árvore esquerda). E, por último, percorre a parte direita (***right subtree***, ou sub-árvore direita).

Ou seja: raiz, esquerda, direita.

```js
/**
 * Definicao de um Node para uma Binary Tree.
 */
function TNode(data) {
  this.data = data;
  this.left = this.right = null;
}

function preorder(root) {
    let output = [];
    let stack = [root];
    
    while (stack.length > 0) {
      const node = stack.pop();
      
      if (!node) continue;
      output.push(node.data)
        
      if (node.right) {
        stack.push(node.right)
      }      
      if (node.left) {
        stack.push(node.left)
      }
    }
    
    return output;
};
```

----

## Pre-order Traversal (Recursiva)

Dá pra fazer essa mesma função de forma recursiva.

Ela é pode ser um pouco mais complicada de entender. Porém é mais rápida.

```js
/**
 * Definicao de um Node para uma Binary Tree.
 */
function TNode(data) {
  this.data = data;
  this.left = this.right = null;
}

function preorder(root) {
  let result = [];

  function traverse(node) {
    if (root === null) return;
    result.push(node.data);
    
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right)
    }
  }
  
  if (root) {
    traverse(root);
  }
  return result;
};

```

----

## Recursive or Iterative

Recursive solution is trivial, could you do it iteratively

Try to practice the three different traversal methods in our after-article exercise. You might want to implement the methods recursively or iteratively. Implement both recursion and iteration solutions and compare the differences between them.

----


Pra trabalhar bem com as _binary trees_, você deve entender os seguintes tópicos:

* o conceito de _tree_ e de  _binary tree_; (que foi este artigo)
* saber implementar as funções de _traversal_; 
* usar recursividade pra resolver problemas com _binary-trees_;