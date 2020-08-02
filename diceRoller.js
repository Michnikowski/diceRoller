function diceRoller(){
  return console.log(randomNumber(20))
}

function randomNumber(rangeEnd){
  let output = 0
  while (output === 0){
    output = Math.round(Math.random() * rangeEnd)
  }
  return output
}

diceRoller()
