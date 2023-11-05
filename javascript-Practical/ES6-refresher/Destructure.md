with obj

```js
let obj = {
  name: "suvi",
  age: 70,
  isStudent: false
}
let {name,age,isStudent} = obj;
console.log(name) //suvi

 isStudent = true;
console.log(isStudent) // true // change in refrence 
console.log(obj) // original value not change in original one
```


function

```js
function useState(){
  return ["10", "20"]
}
let [x,y] = useState();
console.log(x,y)
```

```js
function useState(){
  return ["10", function changeState() { console.log("20")}]
  }
  let [value, fn] = useState();
  console.log(value,fn);
  fn();
```





