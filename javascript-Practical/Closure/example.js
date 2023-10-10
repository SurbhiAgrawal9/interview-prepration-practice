function x(){
let a = 7;
  function y(){
    console.log(a)
  }
  return y   //return the whole lexical scope that is closure
}
let z = x();
console.log(z)
z();


