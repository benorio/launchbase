const alunos = [
  {
    nome: "Henry",
    nota: 9.8
  },
  {
    nome: "Ronaldo",
    nota: 10
  },
  {
    nome: "Romário",
    nota: 9.7
  }
]

//const teste = ["Comida","Bebida","Casa",10,[10,12,13,14]]
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

media > 5 ?
  console.log(`Ataque aprovado com media ${media}`):
  console.log(`Ataque reprovado com media ${media}`);


//console.log(teste[4][1])