function z(){
  let b = 900;
  function x(){
   let a = 7;
      function y(){
        console.log(a,b)
      }
       y()  //remeber it's lexical scope thats is x function and refrence a  
    }
   x()
}

// console.log(z)
z();
