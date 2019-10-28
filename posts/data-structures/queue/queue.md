---
pid: "20191027"
title: 'Queue com JS'
date: '2019-10-27T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/queue-js/
slug: queue-js
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['queue-100', 'queue-200', datastructures-100]
video: ""
---

A estrutura **Queue** (leia-se: kíu) - em português: **Fila** - é uma estrutuda de dados básica que implementa a regra First-In, First-Out (**FIFO**). Elas são um pouco mais complexas que as [Stacks](/artigos/stack-js).

É o mesmo princípio das filas de pessoas, ou de carros.

A operação de inserção é chamada **Enqueue** (leia-se: en-kiu). E operação de remoção é chamada **Dequeue** (leia-se: de-kiu). 

Toda Queue possui um **head** (ou, início) e um **tail** (ou, final).

```js
// Exemplo de Queue com Array
let queue = [];

queue.head = -1;
queue.tail = 0;
```

Um elemento entra na Queue pelo tail, ou seja, no final, pela operação enqueue. <br />
E sai da Queue pelo head, com a operação dequeue. <br />


Ela pode ser feita usando Arrays ou [Linked Lists](/artigos/linked-lists-js).

A ordem dos items é importante em uma Queue.

----

## Enqueue

```js
function enqueue(item) {
  this.items[this.tail] = item;

  if (this.tail == this.length) {
    this.tail = 1;
  } else {
    this.tail += 1;
  }
    
}
```
----

## Dequeue

```js
function dequeue() {

}
```
----

## Implementação



```js
class TQueue {
  // store elements
  private List<Integer> data;         
  // a pointer to indicate the start position
  private int p_start;  

  public TQueue() {
    data = new ArrayList<Integer>();
    p_start = 0;
  }

  /** Insert an element into the queue. Return true if the operation is successful. */
  public boolean enQueue(int x) {
    data.add(x);
    return true;
  };    

  /** Delete an element from the queue. Return true if the operation is successful. */
  public boolean deQueue() {
    if (isEmpty() == true) {
      return false;
    }
    p_start++;
    return true;
  }

  /** Get the front item from the queue. */
  public int Front() {
    return data.get(p_start);
  }
  
  /** Checks whether the queue is empty or not. */
  public boolean isEmpty() {
    return p_start >= data.size();
  }     
};
```

----

## Queue - Usage