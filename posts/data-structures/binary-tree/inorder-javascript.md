---
pid: "20191031"
title: 'Binary Tree com JS: in-order'
date: '2019-10-31T08:00:14+00:00'
author: Ruan Carvalho
excerpt: ''
contentType: post
path: /artigos/inorder-javascript
slug: inorder-javascript
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binary-tree-100', 'binary-tree-200', datastructures-100]
video: ""
---

O **in-order traversal** (ou, percurso em-ordem) percorre primeiro o lado esquerdo da árvore. Depois acessa o root (raiz). E, por fim, percorre o lado direito.

----

## Exemplo Recursivo

A forma mais comum de percorrer uma árvore é com recursão. Este é o método clássico e mais direto:

```js
const inorder = function(root) {
  if (!root) return null;

  inorder(root.left);
  console.log(root.value)
  inorder(root.right);
}
```

### Análise de Complexidade

* Tempo Linear - _O(n)_.

* Espaço Linear - _O(n)_ - no pior cenário; e Espaço Logarítmico - _O(log n)_ - na média, sendo _n_ o número de nodes

----

## Exemplo Iterativo

```js
const inorder = function(root) {
  if (!root) return [];
  
  const output = [];
  const nodes = [];
  let current = root;
    
  while (current !== null || nodes.length > 0) {
       
    while (current !== null) {
      nodes.push(current);
      current = current.left;
    }
        
    current = nodes.pop();
    output.push(current.value);
    
    current = current.right;
  }
  
  return output;
};
```
### Análise de Complexidade

* Tempo Linear - _O(n)_

* Espaço Linear - _O(n)_

----

Typically, for binary search tree, we can retrieve all the data in sorted order using in-order traversal. We will mention that again in another card(Introduction to Data Structure - Binary Search Tree).

