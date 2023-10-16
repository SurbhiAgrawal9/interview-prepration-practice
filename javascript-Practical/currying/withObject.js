onst userObj = {
   name:"anie",
   age: "20"
}
    

function userInfo(obj){
  return function(info){
      return obj[info]
  }
}


let res = userInfo(userObj)
  console.log(res('age'))
