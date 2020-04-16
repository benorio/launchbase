const alunosDaTurmaA = [
  {
    nome: "Figo",
    nota: 9.8
  },
  {
    nome: "Zidane",
    nota: 10
  },
  {
    nome: "Cafu",
    nota: 9
  }
]

const alunosDaTurmaB = [
  {
    nome: "Ronaldinho",
    nota: 10
  },
  {
    nome: "Kaká",
    nota: 8
  },
  {
    nome: "Adriano",
    nota: 7
  }
]

function calculaMedia(alunos){
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

function enviarMensagem(media, turma){
  media > 5 ?
  console.log(`A ${turma} tem média foi de ${media}. Parabéns aprovado`):
  console.log(`A ${turma} tem media média de ${media}. Reprovado !`);
}

enviarMensagem(media1, "TurmaA");
enviarMensagem(media2, "TurmaB");