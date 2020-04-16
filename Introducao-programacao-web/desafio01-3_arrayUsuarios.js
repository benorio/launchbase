const usuarios = [
  {
    nome: "Pirlo",
    tecnologias: ["Html"," Css"]
  },
  {
    nome: "Gatuso",
    tecnologias: ["JavaScript"," Css"]
  },
  {
    nome: "Seedorf",
    tecnologias: ["Html"," Node.js"]
  }
];

for (let i = 0; i < usuarios.length; i ++){
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)  
}
