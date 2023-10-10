
  // fix this code
  ```js
function x(){
for(var i=1;i<=5;i++){   // bcz of var  
     //callback function run after complet the loop
    setTimeout(function(){
           console.log(i); // print 6 continue in 5 time bcz i is altime refering same spot in memory
    },i* 1000);
} 
}
x();
```


// fix it with the help of let

```js
function x(){
for(let i=1;i<=5;i++){   //let is block scope, in everytime 
    
    setTimeout(function(){
           console.log(i);   // print 1 to 5  i is refering in diffrent memory location (in new copy of i)
    },i* 1000);
}
}
x();
```

// with the help of closure 

```js
function x(){
for(var i=1;i<=5;i++){
    function close(i){              //it creates a new copy of i for itself overhere bcz of closure
        setTimeout(function(){
           console.log(i)
    },i* 1000)
    }
    close(i); //everytime call the close function with i
    
}
}
x()
```
