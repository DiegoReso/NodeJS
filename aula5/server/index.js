const http = require('http')

const server = http.createServer(function(request,response){
  

  response.end('Hello World')
})


server.listen(8080)
console.log("Servidor escutando na porta 80")