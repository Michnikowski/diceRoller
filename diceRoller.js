function diceRoller(){

  let random_1_30 = []

  for(let i = 1; i < 3; i++){
    random_1_30.push(randomNumber(30))
  }

  let diceRollsResults = []

  for(let i = 1; i <= 5; i++){
    diceRollsResults.push(randomNumber(20))
  }

  if(random_1_30[0] <= 7 && (random_1_30[1] >= 24 && random_1_30[1] <=30)){
    diceRollsResults.push(25)
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
