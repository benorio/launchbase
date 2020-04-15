function createTransactions(transaction){
  user.transactions.push(transaction);
}

function getHigherTransactionByType(typeTransaction){
  let higherTransaction
  let higherValue = 0

  for (let transaction of user.transactions) {
    if (transaction.type == typeTransaction && transaction.value > higherValue) {
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }

  return higherTransaction
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
createTransactions({ type: "credit", value: 120 });
createTransactions({ type: "debit", value: 80 });
createTransactions({ type: "debit", value: 30 });
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


