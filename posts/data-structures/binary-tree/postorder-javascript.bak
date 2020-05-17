---
pid: "20191004"
title: 'Binary Tree: Percurso post-order'
date: '2019-10-04'
author: Ruan Carvalho
excerpt: ''
contentType: post
path: /artigos/binary-tree-postorder-javascript
slug: binary-tree-postorder-javascript
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572540340/data-structures/binary-tree-com-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binary-tree-100', 'binary-tree-200', 'binary-tree-300', 'binary-tree-400', datastructures-100]
video: ""
---

O **in-order traversal** (ou, percurso em-ordem) percorre primeiro o lado esquerdo da árvore. Depois acessa o root (raiz). E, por fim, percorre o lado direito.

----

## Exemplo Recursivo

A forma mais comum de percorrer uma árvore é com recursão. Este é o método clássico e mais direto:

```js
const inorder = function(root) {

  // funcao auxiliar para percorrer de forma recursiva
  const traverse = function(node, list) {
    if (!node) return;
      
    if (node.left !== null) {
      traverse(node.left, list);
    }
    
    list.push(node.value);
    
    if (node.right !== null) {
      traverse(node.right, list);
    }
  }

  let output = [];
  traverse(root, output);
  return output;
}
```

### Análise de Complexidade

* Tempo Linear - _O(n)_.

* Espaço Linear - _O(n)_ - no pior cenário; e Espaço Logarítmico - _O(log n)_ - na média, sendo _n_ o número de nodes

----

## Exemplo Iterativo

Outra forma de percorrer é de forma iterativa, usando uma [Stack](/artigos/stack-js) (pilha) para ajudar a guardar os nodes.

```js
const inorder = function(root) {
  if (!root) return [];
  
  const output = [];
  const stack = [];
  let current = root;
    
  while (current !== null || stack.length > 0) {
       
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
        
    current = stack.pop();
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

