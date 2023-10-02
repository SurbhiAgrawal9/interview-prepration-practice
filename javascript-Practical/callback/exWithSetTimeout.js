function fetchData(callback){
     setTimeout(() => {
       const data = "some async data"
       callback(data)
     },1000)
}

fetchData((result) => {
  console.log(result);
  
})
