
let userDetaill1 = {
  name: "anuj sharma",
  age: 49,
  printAll: function(){
  console.log(this.name)
  }
}

let userDetaill2 = {
  name: "rahul yadav",
  age: "50",
}

//function borrowing
userDetaill1.printAll.call(userDetaill2)
