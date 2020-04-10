const aluno01 = {
  nome: "Henry",
  nota: 9.8
}

const aluno02 = {
  nome: "Ronaldo",
  nota: 10
}

const aluno03 = {
  nome: "Romário",
  nota: 9.8
}


const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3; //Acessando atributo nota

media > 5 ?
  console.log(`Ataque aprovado com media: ${media}`):
  console.log(`Ataque reprovado com média de: ${media}`);