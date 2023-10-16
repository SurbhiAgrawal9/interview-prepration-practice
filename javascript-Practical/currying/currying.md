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





