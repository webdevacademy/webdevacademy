---
pid: "20191026"
title: 'Binary Search (com JS) - Exemplo 2'
date: '2019-10-26T06:00:14+00:00'
author: Ruan Carvalho
excerpt: Neste tutorial, você vai aprender como começar um projeto com Bootstrap 4 e os conceitos básicos.
contentType: post
path: /artigos/binary-search-js-exemplo2/
slug: binary-search-js-exemplo2
featured_media: https://res.cloudinary.com/webdevacademy/image/upload/v1572016259/algorithms/binary-search-js.png
categories: ['Artigos']
tags: ['Algoritmos']
menus: ['binarysearch-100', algorithms-100]
---

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