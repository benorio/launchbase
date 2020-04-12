const usuarios = [
  {
    nome: "Pirlo",
    tecnologias: ["Html","Css"]
  },
  {
    nome: "Gatuso",
    tecnologias: ["JavaScript","Css"]
  },
  {
    nome: "Seedorf",
    tecnologias: ["Html","Node.js"]
  },
];

function acharCss(usuario){
    for (let tecnologia of usuario.tecnologias){
      if (tecnologia == "Css") return true;
    }
  }


for (let i=0; i < usuarios.length; i++){
  const msg = acharCss(usuarios[i])
  if (msg){
    console.log(`${usuarios[i].nome} trabalha com Css`)
  }
}

/*
  Percorrendo vetor
for (let i = 0; i < usuarios.length; i++){
  for (let tecnologia of usuarios[i].tecnologias){
    if (tecnologia == "Css") console.log(`${usuarios[i].nome} trabalha com ${tecnologia}`)
  }
  //console.log(usuarios[i].tecnologias)
}*/