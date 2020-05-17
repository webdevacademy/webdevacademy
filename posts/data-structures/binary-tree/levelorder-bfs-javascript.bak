---
pid: "201910045"
title: 'Binary Tree: Percurso level-order'
date: '2019-10-05'
author: Ruan Carvalho
excerpt: ''
contentType: post
path: /artigos/binary-tree-levelorder-javascript
slug: binary-tree-levelorder-javascript
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572540340/data-structures/binary-tree-com-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binary-tree-100', 'binary-tree-200', 'binary-tree-300', 'binary-tree-400', datastructures-100]
video: ""
---

O **level-order traversal** (ou, percurso por nível) percorre cada nível, ou camada, da altura da árvore. 

Normalmente, esse percurso é feito usando o algoritmo **Breadth-First Search** (BFS), que também serve para fazer busca em estruturas como árvores e grafos.

Esse algoritmo começa pela raiz e acessa esse node primeiro. Depois, passa para os filhos, que são o segundo nível, e acessa cada um. Depois, passa para os filhos destes, que agora são o terceiro nível, e acessa cada um... E assim por diante.

Sempre que você fizer um breadth-first search em uma árvore, a ordem dos _nodes_ será visitada por nível.

----

## Exemplo de level-order com JavaScript

Vamos usar essa estrutura para cada nó da árvore binária:

```js
const TreeNode = function(val) {
  this.value = val;
  this.left = this.right = null;
}
```

O BFS usa uma [Queue](/artigos/queue-js) (fila) para ajudar a guardar os _nodes_ de cada nível, e percorrer a árvore:

```js
const levelOrder = function(root) {
  if (!root) return [];
  
  const output = [], queue = [root];
             
  while (queue.length) {
    const level = [];
    let nodes = queue.length;
    
    for (let i = 0; i < nodes; i++) {
      const node = queue.shift();
      level.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }    
    output.push(level);
  }
  
  return output;
};
```

### Análise de Complexidade

* Tempo Linear - _O(n)_

* Espaço Linear - _O(n)_

----
```
    3
   / \
  9  20
    /  \
   15   7
```

```
[
  [3],
  [9,20],
  [15,7]
]
```

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```