---
pid: "20191023"
title: 'Binary Search (com JS)'
date: '2019-10-23T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/binary-search-js/
slug: binary-search-js
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572016259/algorithms/binary-search-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binarysearch-100', algorithms-100]
---

Binary Search (Busca Binária) is one of the most fundamental and useful algorithms in Computer Science. It describes the process of searching for a specific value in an ordered collection.

Terminology used in Binary Search:

* Target - the value that you are searching for
* Index - the current location that you are searching
* Left, Right - the indicies from which we use to maintain our search Space
* Mid - the index that we use to apply a condition to determine if we should search left or right

### Exemplo

```js
/**
 * Exemplo de um Binary Search recursivo
 * 
 * items []
 */
const binarySearch = function(items, left, right) {
  if (r >= l) { 
    int mid = l + (r - l) / 2; 

    // If the element is present at the 
    // middle itself 
    if (arr[mid] == x) 
        return mid; 

    // If element is smaller than mid, then 
    // it can only be present in left subarray 
    if (arr[mid] > x) 
        return binarySearch(arr, l, mid - 1, x); 

    // Else the element can only be present 
    // in right subarray 
    return binarySearch(arr, mid + 1, r, x); 
  } 

  // We reach here when element is not present 
  // in array 
  return -1; 
}
```

CARVALHO, Ruan. Web Dev Academy. 2019.
