const path = require('path')
const express = require('express')
const fs = require('fs')

const app = express()

app.set('view engine' ,'ejs')



//Como estamos usando o ejs nao precisa definir os caminhos dos arq da pasta views
//definindo arquivos estaticos
// app.use(express.static(path.join(__dirname, 'views')))

//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post(formulario)
app.use(express.urlencoded({extended:true}))


//rotas
app.get('/', (req,res)=>{
  res.render('index', {
    title: "Pagina Inicial"
  })
})

app.get('/registerposts', (req,res)=>{
  const {c} = req.query
  res.render('registerposts', {
    title: "Cadastro de Post",
    cadastrado: c
  })
})


app.get('/posts', (req,res)=>{
  res.render('posts', {
    title: "Pagina de Posts",
    posts: [
      {
        title: 'Novidade no mundo da tecnologia',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nostrum ducimus laborum impedit quaerat perspiciatis doloribus tempora veritatis rerum consequatur cumque dolorem minima aut eum, architecto voluptas ipsam libero accusamus asperiores consequuntur eveniet iure nam harum! Est quibusdam asperiores, iste placeat, vero laborum veniam Ipsam.',
        stars: 3
      },
      {
        title: 'Java Script a linguagem do moments',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asp, architecto voluptas ipsam libero accusamus asperiores consequuntur eveniet iure nam harum! Est quibusdam asperiores, iste placeat, vero laborum veniam Ipsam.',
        stars: 5
      },
      {
        title: ' Scrments Mussum Ipsum',
        text: 'Lorem ipsum dolor sit amet cipt a linguagem do moonsectetur, adipisicing elit. Aspernatur nostrum ducimus laboro accusamus asperiores consequuntur eveniet iure nam harum! Est quibusdam asperiores, iste placeat, vero laborum veniam Ipsam.'
      },
    ]
  })
})

app.post('/salvar-post',(req,res)=>{
  
  const {titulo,texto} = req.body

  const data = fs.readFileSync('./store/posts.json')
  const posts = JSON.parse(data)

  posts.push({
    titulo,
    texto
  })


  const postsString = JSON.stringify(posts)

  fs.writeFileSync('./store/posts.json', postsString)

 res.redirect('/registerposts?c=1')
})

app.use((req,res)=>{ //midleware
  res.send('Pagina nao encontrada')
})


//404 error
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port ${port}`))