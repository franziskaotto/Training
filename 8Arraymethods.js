const items = [
  { name: 'Bike',       price: 100  }, 
  { name: 'TV',         price: 200  },
  { name: 'Album',      price: 10   },
  { name: 'Book',       price: 5    },
  { name: 'Phone',      price: 500  },
  { name: 'Computer',   price: 1000 },
  { name: 'Keyboard',   price: 25   }
];

//all the listed methods do not change the Object


//Filter_Method

console.log("_______________FILTER________________________");
const filteredItems = items.filter((item) => {
  return item.price <= 100                                //all the items below price 100 are stored in the variable filteredItems
})                                                        //It returns TRUE or FALSE
console.log(filteredItems);
console.log(items);                                       //Object is not changed


//Map_Method - Takes one array and converts it to a new array -> they than look different
console.log("_______________MAP________________________");
const itemNames = items.map((item) => {                   //takes a single parameter (item)
  return item.name                                        //return what we want
})
console.log(itemNames);                                   //we geht a new array

/*i : is super convinient when:
-  i just want a singe key, eg a name, 
-  one array to vonvert into another array
- often used in a for loop 
*/



//find_Method
console.log("_______________FIND________________________");

const foundItem = items.find((item) => {                   //takes a single parameter (item)
  return item.name === `Book` //`Album`                   //TRUE or FALSE statement -> returns the item for the first one where it is true
})
console.log(foundItem); 

/*i  allows you to find a single object in an array
!!! RETURNS the very first item that it is going to find in the array, that is true for the statements

*/

//forEach_Method
console.log("_______________FOR EACH________________________");
items.forEach((item) => {                                     //it´s going to do whats inside this function for every singe item
  console.log(item.name)
});


//Some_Method - returns true or false
console.log("_______________SOME________________________");
const hasInexpensiveItems = items.some((items) => {               //checks for some Items (which fulfill the statements)
  return items.price <= 0  //100                                   //As soon as a SINGLE item returns true, it returns true!

})

console.log(hasInexpensiveItems);

//Every_Method - returns true or false
console.log("_______________EVERY________________________");
const hasExpensiveItems = items.every((items) => {               //checks for every Item
  return items.price <= 0  //1000                                //As soon as a SINGLE item returns true, it returns true!

})

console.log(hasExpensiveItems);


//Some_Method - returns true or false
console.log("_______________REDUCE________________________");

//is a bit different. Normaly we do a addition of the price with a for loop and add each price and log it.

const total = items.reduce((currentTotal, item) => {        //currentTotal is the item we are iterating over
return item.price + currentTotal
}, 0/*second Parameter, starting point*/  )

console.log(total);

/*i: break it down: reduce runs a function on every single item in the array
0 is like the "let sum = 0" -> here the addition starts and "currentTotal=0"
in the next iteration 0 becomes 100 and currentTotal = 100, so the next 200 gets added, and the 100 becomes 200.


const total = items.reduce((0, item) => {        //currentTotal is the item we are iterating over
return item.price + currentTotal
}, 0  )
const total = items.reduce((100, item) => {       
return item.price + currentTotal
}, 0 )
const total = items.reduce((200, item) => {       
},0)
*/


//Some_Method - returns true or false
console.log("_______________INCLUDES________________________");

const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)               //returns TRUE or FALSE
console.log(includesTwo);