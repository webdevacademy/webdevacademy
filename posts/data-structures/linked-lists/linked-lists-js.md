---
pid: "20191028"
title: 'Linked List com JS'
date: '2019-10-28T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/linked-list-js/
slug: linked-list-js
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572742792/data-structures/linked-list-com-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['linked-list-100', 'linked-list-200', datastructures-100]
video: ""
---

Unlike the array, we are not able to access a random element in a singly-linked list in constant time. 

If we want to get the ith element, we have to traverse from the head node one by one. 

It takes us O(N) time on average to visit an element by index, where N is the length of the linked list.

----

## Estrutura de um Node para a Linked List

Cada node de uma lista encadeada deve ter um valor e um link para o próximo node. A lista vai guardar um conjunto desses nodes, em sequência:

```js
const TNode = function(value = null, next = null) {
  this.next = next;
  this.val = value;
}
```
Para instanciar um node da lista:

```js
let item = new TNode();
```
----

## Estrutura de uma Linked List simples

```js
const TLinkedList = function() {
  this.head = null;
  this.size = 0;
  this.tail = null;
};
```
Para instanciar uma lista vazia:
```js
let list = new TLinkedList();
```

----

## Busca em uma Linked List - Search

```js
/**
 * Get the value of the index-th node in the linked list. 
 * If the index is invalid, return -1. 
 * 
 * @param {number} index
 * @param {boolean} asObject
 * @return {number}
 */
TLinkedList.prototype.get = function(index, asObject = false) {
  if (!this.head) return -1;

  let item = this.head;
  let i = 0;

  while (item !== null && i !== index) {
      item = item.next;
      i++;
  }

  if (asObject) 
    return item

  return (item && item.val) || -1;
};
```

----

## Inserção no Início da Lista

```js
/**
 * Add a node of value val before the first element of 
 * the linked list. 
 * 
 * After the insertion, the new node will be the first 
 * node of the linked list. 
 * 
 * @param {number} val
 * @return {void}
 */
TLinkedList.prototype.addAtHead = function(val) {
  let item = new TNode(val)    
  item.next = this.head;

  if (this.head === null) {
    this.tail = item;
  }
  
  this.head = item;
};

```

----

## Inserção no Final da Lista

```js
TLinkedList.prototype.addAtTail = function(value) {
  let item = new TNode(value)
    
  if (this.tail === null) {
    this.head = item;
  }  else {
    this.tail.next = item;
  }
  
  this.tail = item;
};
```

----

## Inserção em Alguma Posição

```js
/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
TLinkedList.prototype.addAtIndex = function(index, val) {
  let current = this.get(index-1, true);
  if (!current) return null;
  
  let item = new TNode(val, current.next, current)
  
  current.next.prev = item;
  current.next = item;
};
```

----

## Remoção

```js
/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
TLinkedList.prototype.deleteAtIndex = function(index) {
  let tmp = this.get(index, true);
  if (!tmp) return null;
  
  let next = tmp.next;
  let previous = tmp.prev;
  
  previous.next = tmp.next;
  next.prev = tmp.prev;
};
```