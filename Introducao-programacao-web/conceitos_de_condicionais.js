const aluno1 = "Henry";
const notaAluno1 = 10;

const aluno2 = "Ronaldo";
const notaAluno2 = 10;

const aluno3 = "Romário";
const notaAluno3 = 10;

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

media > 5 ? 
  console.log(`Aprovado com média de ${media}. Parabéns!`):
  console.log(`Reprovado com média ${media}`);