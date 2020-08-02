function diceRoller(){
  const diceRollsResults = []

  for(let i = 1; i <= 7; i++){
    diceRollsResults.push(randomNumber(20))
  }

  const minValue = Math.min(...diceRollsResults)
  const maxValue = Math.max(...diceRollsResults)
  const itemToRemove = [minValue, maxValue]

  for(const element of itemToRemove) {
    diceRollsResults.splice(diceRollsResults.indexOf(element), 1)
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

diceRoller()
