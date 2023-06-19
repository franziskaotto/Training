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

//Some_Method - returns true or false
console.log("_______________EVERY________________________");
const hasExpensiveItems = items.every((items) => {               //checks for every Item
  return items.price <= 0  //1000                                //As soon as a SINGLE item returns true, it returns true!

})

console.log(hasExpensiveItems);