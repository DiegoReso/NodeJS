const express = require('express')
const app = express()
const path = require('path')

app.set('view engine' ,'ejs')



//Como estamos usando o ejs nao precisa definir os caminhos dos arq da pasta views
//definindo arquivos estaticos
// app.use(express.static(path.join(__dirname, 'views')))

//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//rotas
app.get('/', (req,res)=>{
  res.render('index', {
    title: "Pagina Inicial"
  })
})



app.get('/posts', (req,res)=>{
  res.render('posts', {
    title: "Pagina de Posts",
    posts: [
      {
        title: 'Novidade no mundo da tecnologia"'
      }
    ]
  })
})



app.use((req,res)=>{ //midleware
  res.send('Pagina nao encontrada')
})


//404 error
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port ${port}`))