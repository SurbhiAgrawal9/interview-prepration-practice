infinite currying in javascript
  //static way 
```js
function add(a){
  return function(b){
    return function(){
      return (a+b)
    }
  }
}
console.log(add(2)(4)())
```


dynamic way

```js


function add(a){
    return function(b){
        if(b) return add(a+b);
       return a;
    }  
}

console.log(add(2)(4)(4)(6)(8)())
```





