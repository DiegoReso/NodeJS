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
        title: 'Novidade no mundo da tecnologia',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nostrum ducimus laborum impedit quaerat perspiciatis doloribus tempora veritatis rerum consequatur cumque dolorem minima aut eum, architecto voluptas ipsam libero accusamus asperiores consequuntur eveniet iure nam harum! Est quibusdam asperiores, iste placeat, vero laborum veniam Ipsam.'
      },
      {
        title: 'Java Script a linguagem do moments',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asp, architecto voluptas ipsam libero accusamus asperiores consequuntur eveniet iure nam harum! Est quibusdam asperiores, iste placeat, vero laborum veniam Ipsam.'
      },
      {
        title: ' Scrments Mussum Ipsum',
        text: 'Lorem ipsum dolor sit amet cipt a linguagem do moonsectetur, adipisicing elit. Aspernatur nostrum ducimus laboro accusamus asperiores consequuntur eveniet iure nam harum! Est quibusdam asperiores, iste placeat, vero laborum veniam Ipsam.'
      },
    ]
  })
})



app.use((req,res)=>{ //midleware
  res.send('Pagina nao encontrada')
})


//404 error
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port ${port}`))