function createTransactions(transaction){
  user.transactions.push(transaction);
}

function getHigherTransactionByType(typeTransaction){
  let bigger
  
  for (let i = 0; i < user.transactions.length; i++){
    if (user.transactions[i].type == typeTransaction){   
      
      if (user.transactions[0].value){
        bigger = user.transactions[i].value
      } else {
        if (user.transactions[i].value > bigger) bigger = user.transactions[i]
      }   
    }

  }
  return console.log("*******", bigger)
}

function getAverageTransactionValue(){
  let soma = 0
  
  for (let i = 0; i < user.transactions.length; i++){
    soma = (soma + user.transactions[i].value)
    media = soma / user.transactions.length

  }
  return console.log("###",media)
}

function getTransactionsCount(){
  let countC = countD = 0
  
  for(let i = 0; i < user.transactions.length; i++){
    if (user.transactions[i].type == "credit"){
      countC++;
    } else {
      countD++;
    }    
  }
  return console.log(`{credit: ${countC}, debit: ${countD}}`)
}

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

createTransactions({ type: "credit", value: 50 });
createTransactions({ type: "credit", value: 60 });
createTransactions({ type: "debit", value: 50 });
createTransactions({ type: "debit", value: 70 });
createTransactions({ type: "credit", value: 200 });
getHigherTransactionByType("credit")
getHigherTransactionByType("debit")
getAverageTransactionValue()
getTransactionsCount()

for (let i = 0; i < user.transactions.length; i++){
  if (user.transactions[i].type == "credit"){
    
    user.balance = user.balance + user.transactions[i].value
    console.log(user.balance)
  }
  
  if (user.transactions[i].type == "debit"){
    user.balance = user.balance - user.transactions[i].value
    
    if (user.balance <= 0){
      console.log("Saldo insuficiente")
    } else {
      console.log(user.balance)
    }         
  }  
}


