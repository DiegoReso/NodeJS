const fs = require('fs')


fs.readFile('./clientes.json',function(error,content){
  if(error){
    console.log("Ops deu error", error)
  }else{
    console.log(JSON.parse(content))
  }
})