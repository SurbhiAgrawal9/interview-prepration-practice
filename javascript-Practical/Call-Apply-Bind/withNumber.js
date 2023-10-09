function sayNumber(x,y){
  return [x,y]
}



let a =2;
let b = 1;
let c =3;
let d =5;

console.log(sayNumber.apply(this,[a,b,c,d]))
