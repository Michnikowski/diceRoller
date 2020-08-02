function diceRoller(rolls = 1){
  if (rolls === 0){
    return []
  } else {
    let arr = diceRoller(rolls - 1)
    arr.push(randomNumber(20))
    return arr
  }
}

function randomNumber(rangeEnd){
  let output = 0
  while (output === 0){
    output = Math.round(Math.random() * rangeEnd)
  }
  return output
}

console.log(diceRoller(7))
