function display(sum,mul){
      console.log(sum)
      console.log(mul)
  }
   function extra(){
       return display("another extra", "exectution")
   }
   
   function greeting(){
       return pass("welcome to callback function")
   }

function pass(s){
    return calculate(2,3,display,s)
}

function opera(){
    
    return calculate(4,5,display)
}


function calculate(a,b, callback,s){
    let sum = a + b ;
    let mul = a*b
      console.log(s)
    return callback(sum,mul)
}

greeting();
opera()
extra()
