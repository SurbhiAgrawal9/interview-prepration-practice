remove dublicate and find unique value
```js
const number = [2,4,6,8,3,5,2,9,11,11];
const colors = ['pink','blue','green','black','pink','blue'];

const uniqueNumbers = [...new Set(number)]
console.log(uniqueNumbers)
```

```js
const uniqueNumber = new Set(number);

console.log(...uniqueNumber)
```


```js
const uniqueColors = [...new Set(colors)]
console.log(uniqueColors)
```
