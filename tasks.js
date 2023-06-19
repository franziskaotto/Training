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

let numArray = 

*/

//look up "Prototype chain with for in" 



let str = "hello";
console.log(str.length);

import { data } from '/data.js';

const divElement = function (content) {
  return `<div>${content}</div>`;
}

const loadEvent = function () {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line

  console.log("data: ", data);
  console.log("page: ", page);

  const rootElement = document.getElementById("root");

  if (page === 'movies') {
    data.movies.forEach(movie => {
      rootElement.insertAdjacentHTML("beforeend", divElement(`<h2 id="title">* ${movie["title"]}</h2>`));

      rootElement.insertAdjacentHTML("beforeend", divElement(`<h3 id="title">     Actors:</h2>`));

      movie.actors.forEach(actorId => {

        let tempProf = data.professionals.find(professional => professional.id === actorId)

        rootElement.insertAdjacentHTML("beforeend", divElement(`<h3 id="title">    - ${tempProf.name}</h2>`));
      });

      rootElement.insertAdjacentHTML("beforeend", divElement(`<h3 id="title">     Writers:</h2>`));

      movie.writers.forEach(writerId => {

        let tempProf = data.professionals.find(professional => professional.id === writerId)

        rootElement.insertAdjacentHTML("beforeend", divElement(`<h3 id="title">    - ${tempProf.name}</h2>`));
      });

      rootElement.insertAdjacentHTML("beforeend", divElement(`<h3 id="title">     Directors:</h2>`));

      movie.directors.forEach(directorId => {

        let tempProf = data.professionals.find(professional => professional.id === directorId)

        rootElement.insertAdjacentHTML("beforeend", divElement(`<h3 id="title">    - ${tempProf.name}</h2>`));
      });


    });
  } else if (page === 'actors') {
    data.professionals.forEach(professional => {
      if (professional["roles"].find(name => name === "actor")) {
        rootElement.insertAdjacentHTML("beforeend", divElement(`<h2 id="title">* ${professional["name"]} - (${professional["roles"]}) </h2>`));
      }
    });
  } else if (page === 'directors') {
    data.professionals.forEach(professional => {
      if (professional["roles"].find(name => name === "director")) {
        rootElement.insertAdjacentHTML("beforeend", divElement(`<h2 id="title">* ${professional["name"]} - (${professional["roles"]}) </h2>`));
      }
    });
  } else if (page === 'writers') {
    data.professionals.forEach(professional => {
      if (professional["roles"].find(name => name === "writer")) {
        rootElement.insertAdjacentHTML("beforeend", divElement(`<h2 id="title">* ${professional["name"]} - (${professional["roles"]}) </h2>`));
      }
    });
  }



  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
