const usarios = [
  {
    nome: "Davids",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Hadji",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Xavi",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function somarNumeros(numero){
  let soma = 0;
  for (let i = 0; i < numero.length; i++){
    soma = soma + numero[i];
  }
  return soma;
}

function calcularSaldo(receitas,despesas){
  let saldoTotal = somarNumeros(receitas) - somarNumeros(despesas);
  return saldoTotal;
}

for (let i = 0; i < usarios.length; i++){ 
  const valorTotal = calcularSaldo(usarios[i].receitas, usarios[i].despesas)
  //console.log("------------------------------------------------------------")
  //console.log(usarios[i].receitas)
  //console.log(usarios[i].despesas)
  //console.log("------------------------------------------------------------")
  //console.log(somarNumeros(usarios[i].receitas))
  //console.log(somarNumeros(usarios[i].despesas))
  //console.log("------------------------------------------------------------")
  //console.log(valorTotal);
  if (valorTotal > 0){
    console.log(`${usarios[i].nome} tem saldo POSITIVO de ${valorTotal.toFixed(2)}`);
  } else {
    console.log(`${usarios[i].nome} tem saldo NEGATIVO de ${valorTotal.toFixed(2)}`);
  }
}