const nome = "Silvana";
const sexo = "F";
const idade = 58;
const contribuicao = 23;

const nomeH = "Carlos";
const idadeH = 65;
const contribuicaoH = 35;

if (sexo == "F"){
  if (contribuicao >= 30 && (contribuicao + idade) >= 85){
    console.log(`${nome} você pode ser aposentada !`);
  } else {
    console.log(`${nome} você ainda não pode se aposentar`);
  }
} else {
  if (contribuicaoH >= 35 && (contribuicaoH + idadeH) >= 95){
    console.log(`${nomeH} você pode ser aposentado`);
    } else {
      console.log(`${nomeH} você não pode ser aposentado`);
      }
}