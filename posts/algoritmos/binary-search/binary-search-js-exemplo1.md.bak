---
pid: "20191025"
title: 'Binary Search (com JS) - Exemplo 1 '
date: '2019-10-25T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/binary-search-js-exemplo1/
slug: binary-search-js-exemplo1
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572016259/algorithms/binary-search-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binarysearch-100', algorithms-100]
---

Template #1 is the most basic and elementary form of Binary Search. 

It is the standard Binary Search Template that most high schools or universities use when they first teach students computer science. 

Template #1 is used to search for an element or condition which can be determined by accessing a single index in the array.

Este exemplo 

```js
const binarySearch = function(items, target) {
  
  if (items === null || items.length === 0)
    return -1;

  let left = 0, right = items.length - 1;

  while (left <= right) {
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if(items[mid] == target){ return mid; }
    else if(items[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}
```

## Key Attributes

Most basic and elementary form of Binary Search 

Search Condition can be determined without comparing to the element's neighbors (or use specific elements around it)

No post-processing required because at each step, you are checking to see if the element has been found. If you reach the end, then you know the element is not found
 

## Distinguishing Syntax:

Initial Condition: left = 0, right = length-1
Termination: left > right
Searching Left: right = mid-1
Searching Right: left = mid+1

asd

## Complexidade