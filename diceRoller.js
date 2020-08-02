function diceRoller(){
  let diceRollsResults

  do {
    diceRollsResults = []
    for(let i = 1; i <= 5; i++){
      diceRollsResults.push(randomNumber(20))
    }
  }
  while (arrSum(diceRollsResults) < 55)

  return console.log(diceRollsResults)
}

function randomNumber(rangeEnd){
  let output = 0
  while (output === 0){
    output = Math.round(Math.random() * rangeEnd)
  }
  return output
}

function arrSum(arr){
  return arr.reduce((a, b) => a + b, 0)
}

diceRoller()
