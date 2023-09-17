
function display(sum){
      console.log(sum)
  }

function pass(){
    return calculate(2,3,display)
}


function calculate(a,b, callback){
    let sum = a + b ;
    return callback(sum)
}

pass();
