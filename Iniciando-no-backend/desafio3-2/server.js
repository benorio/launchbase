const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("view engine", "njk")
server.use(express.static("public"))

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function(req, res){
  const about = {
    avatar_url: "https://avatars3.githubusercontent.com/u/10758693?s=460&u=513aecdd65d6af04f6d4f10c4255a8626d288c19&v=4",
    name: "Benivaldo Junior",
    role: "Desenvolvedor Junior",
    description: 'Padawan no Curso Sistemas para Internet na Universidade Estadual de Ciências da Saúde de Alagoas. Fanboy de games em fps e um curioso tecnológico sem limites.<a href="https://rocketseat.com.br">Clique aqui</a>',
    links: [
      {
        name:"Instagram",
        url:"https://www.instagram.com/honoriox/"
      },
      {
        name:"Github",
        url:"https://github.com/benorio"
      },
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/benivaldo-honorio-77635898/"
      },
      {
        name:"Cursos",
        url:"/courses"
      }
    ]
  }
  return res.render("about", {about})
})

server.get("/courses", function(req, res){
  const course = {
    links: [
      {
        name:"Instagram",
        url:"https://www.instagram.com/honoriox/"
      },
      {
        name:"Github",
        url:"https://github.com/benorio"
      },
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/benivaldo-honorio-77635898/"
      },
      {
        name:"Sobre",
        url:"/"
      }
    ]
  }
  const msg_wrapper = '<b>Escolha um dos cursos</b>e alavanque sua carreira...'

  const card_courses = {
    links: [
      {
        image: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg",
        name: "LaunchBase",
        description: "<b>Torne-se um programador desejado</b>no mercado com esses cursos gratuitos",
        class: "10 Aulas",
        price: "Gratuito",
      },
      {
        image: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg",
        name: "LaunchBase",
        description: "<b>Torne-se um programador desejado</b>no mercado com esses cursos gratuitos",
        class: "10 Aulas",
        price: "Gratuito",
      },
      {
        image: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg",
        name: "LaunchBase",
        description: "<b>Torne-se um programador desejado</b>no mercado com esses cursos gratuitos",
        class: "10 Aulas",
        price: "Gratuito",
      }
    ]
  }


  return res.render("courses", {card_courses,msg_wrapper,course})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});


server.listen(5002, function(){
  console.log("Server is running")
})