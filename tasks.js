/*
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




//this is how result need to look like (list of 3 objcets with two key-value pairs)
//let resultList = [{name: "Adri", points: 111}, {name: "Heidelinde", points: 4943}, {name: "Martin", points: 23}]

let inputArray = ["Adri             111", "Heidelinde       4943", "Martin           23"]




function fromArrayToObject (anArray) {
  
  let resultArray = []
  
  for (let i = 0; i < anArray.length; i++) {
    let splittedArray = anArray[i].split(` `)
    //console.log(splittedArray)

    let valueName = splittedArray[0];
    let valuePoints = parseInt(splittedArray.length -1);

    let anObject = {name: valueName, points: valuePoints}
    resultArray.push(anObject);
  }
  console.log(resultArray)
  return resultArray
}
fromArrayToObject(inputArray)



let numberArray = []
let amount = 0
let text = "divisible by 7 or 5 or 3!"

for (let i = 0; i < 10; i++) { 
  numberArray.push(Math.floor(Math.random() * 99))

  if (numberArray[i] % 7 === 0 || numberArray[i] % 5 === 0 || numberArray[i] % 3 === 0) {
    amount += 1
    console.log(`${numberArray[i]} is ${text}`);
  }
}
console.log(`We found ${amount} numbers ${text}`);

*/

let text = "3hey5hello2hi";

function isAValidMessage(message){
  console.log(message);
  
  let array = [];
  
  let stringLetter = "";
  let stringNumber = "";
  
  for (let i = 0; i < message.length; i++) {
   
    let sliced = message[i].slice(``);
    array.push(sliced)
    //console.log(result)

    //search for the numbers
    
    let itsAMatch = sliced.match(/\d/g)
    console.log(itsAMatch);

    //TODO
    /*
    its a match als nummer abespeihcern,
    its a match und array.length miteinander vergleichen
    */

    

    
      
    
  }
    
  
  
  
  
      
  console.log(array);

  return array
  
  // your code
}
isAValidMessage(text)



/*
const person = {
  firstName : "Franzi",
  lastName  : "Otto",
  pets      : ["mika", "dio"],
  colours   : {
    best    : "blue",
    second  : "red",
  }
};

function callMyKey(anObject) {

  for (let key in anObject) {  //wenn man mit in ins object geht bekommt man einen string zuruck
    if (key === "pets") {


      for (let abc of anObject[key]) {
        console.log(abc);

        if(abc.includes("mika")) {
          console.log("yes");
        } else {
          console.log("no");
        }
      }
    }
  }
}
callMyKey(person)


*/