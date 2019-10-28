---
pid: "20191028"
title: 'Linked List com JS'
date: '2019-10-28T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/linked-list-js/
slug: linked-list-js
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572016259/algorithms/linked-list-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['linked-list-100', 'linked-list-200', datastructures-100]
video: ""
---


----

## Estrutura de um Node

```js
/**
 * Initialize your data structure here.
 */
const TNode = function(value = null, next = null) {
  this.next = next;
  this.val = value;
}
```

```js
let item = new TNode(10);
```
----

## Estrutura de uma Linked List

```js
/**
 * Initialize your data structure here.
 */
const TLinkedList = function() {
  this.head = null;
  this.size = 0;
  this.tail = null;
};
```

```js
let list = new TLinkedList();
```

----

## Estrutura de uma Linked List

```js
/**
 * Get the value of the index-th node in the linked list. 
 * If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index, asObject = false) {
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

```js
/**
 * Add a node of value val before the first element of the linked list. 
 * After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let item = new MyListNode(val)
    
    item.next = this.head;
  
    if (this.head !== null) {
        this.head.prev = item
    } else {
      this.tail = item;
    }
    
    this.head = item;
    item.prev = null;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let item = new MyListNode(val)
       
    if (this.tail !== null) {        
      this.tail.next = item;        
      item.prev = this.tail;
    } else {
        
    }
    
    this.tail = item;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let tmp = this.get(index-1, true);
  if (!tmp) return null;
  
  
  let item = new MyListNode(val, tmp.next, tmp)
  
  tmp.next.prev = item;
  tmp.next = item;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let tmp = this.get(index, true);
  if (!tmp) return null;
  
  let next = tmp.next;
  let previous = tmp.prev;
  
  previous.next = tmp.next;
  next.prev = tmp.prev;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```