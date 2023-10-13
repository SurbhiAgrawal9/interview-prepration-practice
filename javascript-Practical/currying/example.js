//with closure function

function a(x){
  return function b(y){
    return  function c(z){
          return x+y+z;
    }
  }
}

// let res = a(2);
// console.log(res);
// let second = res(3);
// console.log(second)
// let final = second(2);
// console.log(final)

let res = a(2)(3)(2);
console.log(res)
