      // assignment 
    
const obj1 = {
  var1: 5,
  var2: 7
};

const obj2 = {
  var1: 10,
  var2: 3
};

function sum() {
  return this.var1 + this.var2;
}
function mul() {
  return this.var1 *  this.var2;
}

// Using call method
const result1 = sum.call(obj1);
console.log(result1); // This will log 12 (5 + 7)

const result2 = mul.call(obj2);
console.log(result2); // This will log 13 (10 + 3)

// Using apply method
const result3 = sum.apply(obj1);
console.log(result3); // This will also log 12 (5 + 7)

const result4 = mul.apply(obj2);
console.log(result4); // This will also log 13 (10 + 3)
