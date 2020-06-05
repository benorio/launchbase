const express = require("express");
const nunjucks = require("nunjucks");
const cursos = require("./data");


const server = express();

server.set("view engine", "njk");

server.use(express.static("public"));

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen(5003, function(){
  console.log("Server está rodando na porta 5003");
});

server.get("/", function(req, res){
  const about = {
    avatar_url:"https://avatars3.githubusercontent.com/u/10758693?s=460&u=513aecdd65d6af04f6d4f10c4255a8626d288c19&v=4",
    name:"Benivaldo Honório",
    role:"Desenvolvedor Junior",
    description:'Padawan no Curso Sistemas para Internet na Universidade Estadual de Ciências da Saúde de Alagoas. Fanboy de games em fps e um curioso tecnológico sem limites. <a href="https://rocketseat.com.br">Clique aqui</a>',
    links: [
      {name: "Github", url: "https://github.com/benorio"},
      {name: "Instagram", url: "https://www.instagram.com/honoriox/"},
      {name: "Linkedin", url: "https://www.linkedin.com/in/benivaldo-honorio-77635898/"},
      {name: "Cursos", url: "/courses"} 
    ]
  }
  return res.render("about", {about});
});

server.get("/courses", function(req, res){
  const links = [
    {name: "Github", url: "https://github.com/benorio"},
    {name: "Instagram", url: "https://www.instagram.com/honoriox/"},
    {name: "Linkedin", url: "https://www.linkedin.com/in/benivaldo-honorio-77635898/"},
    {name: "Cursos", url: "/courses"} 
  ]


  return res.render("courses", {links,items:cursos});
})

server.get("/course", function(req, res){

  return res.render("course");
})

server.get("/course/:id", function(req, res) {
  const id = req.params.id;

  const course = cursos.find(function(course){
    return course.id == id;
  })

  if(!course){
    return res.status(404).render("not-found")
  }

  return res.render("course", {item:course})
});


server.use(function(req, res) {
  res.status(404).render("not-found");
});