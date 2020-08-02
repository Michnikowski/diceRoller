function diceRoller(){

  let random_1_30

  do {
    random_1_30 = randomNumber(30)
  }
  while (random_1_30 > 1 && random_1_30 < 8)

  let diceRollsResults = []

  for(let i = 1; i <= 7; i++){
    diceRollsResults.push(randomNumber(20))
  }

  let minValue = Math.min(...diceRollsResults)
  removeValueFromArray(diceRollsResults, minValue)

  if (random_1_30 !== 1){
    const maxValue = Math.max(...diceRollsResults)
    removeValueFromArray(diceRollsResults, maxValue)

  } else {
    let minValue = Math.min(...diceRollsResults)
    removeValueFromArray(diceRollsResults, minValue)
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

function removeValueFromArray(arr, value){
  arr.splice(arr.indexOf(value), 1)
  return arr
}

diceRoller()
