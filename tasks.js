let numberArray = []
let amount = 0
let text = "divisible by 7 or 5 or 3!"

for (i = 0; i < 10; i++) { 
  numberArray.push(Math.floor(Math.random() * 99))

  if (numberArray[i] % 7 === 0 || numberArray[i] % 5 === 0 || numberArray[i] % 3 === 0) {
    amount += 1
    console.log(`${numberArray[i]} is ${text}`);
  }
}
console.log(`We found ${amount} numbers ${text}`);