function diceRoller(additionRoll = false){
  let diceRollsResults = []

  for(let i = 1; i <= 5 + additionRoll; i++){
    diceRollsResults.push(randomNumber(20))
  }

  return console.log(diceRollsResults)
}

function randomNumber(rangeEnd){
  let output = 0
  while (output === 0){
    output = Math.round(Math.random() * rangeEnd)
  }
  return output
}

diceRoller(true)
