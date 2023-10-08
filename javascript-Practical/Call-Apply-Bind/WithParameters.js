// CAll , Apply & bind

let userDetaill1 = {
  name: "anuj sharma",
  age: 49,
  
}

let printAll =  function(state, country){
  console.log(this.name + " " + state + " " + country)
  }

let userDetaill2 = {
  name: "rahul yadav",
  age: "50",
}

//function borrowing
printAll.call(userDetaill1,"ooty","india")
// printAll.call(userDetaill2,"kashmir")
//Apply
printAll.apply(userDetaill2, ["kashmir","india"])

//Bind
let store = printAll.bind(userDetaill1, "paris", "france")
store()
