import { assertEquals } from "./test-fundamentals.js"; 
import { bagel, basket } from "./production.js";
import allBagels from "./test-bagels.js";

// ## User Story 1 Test
// Arrange
const sesameBagel = allBagels.sesameBagel;
const currantBagel = allBagels.currantBagel;
let theBasket = new basket();
let expected = "Added to basket";
let actual, result;

function bagelsInTheBasket() {
    let bagelsInBasket = theBasket.getContents();
    console.log("Bagels in Basket:");
    bagelsInBasket.forEach((item) => {
            console.log(item);
    });
}

// Act
actual = theBasket.addBagel(sesameBagel);
theBasket.addBagel(currantBagel);

// Assert
result = assertEquals(actual, expected);

//report
console.log("Added to basket?");
console.log(result);
bagelsInTheBasket();

// ## User Story 2 Test
// Arrange
// As above
expected = "Removed from basket";
//Act
actual = theBasket.removeBagel(sesameBagel);

//Assert
result = assertEquals(actual, expected);
//Report
console.log("Removed from basket?");
console.log(result);
bagelsInTheBasket();


// ## User story 3.1 test
// arrange
// as above
expected = 1;

//act

actual = theBasket.getCount();

result = assertEquals(actual, expected);
console.log("Able to say how many bagels are in the basket?:");
console.log(result);

// ## User story 3.2 test
//* Is the basket not full? *//
// arrange
// as above
expected = false;

//act
actual = theBasket.isBasketFull();

result = assertEquals(actual, expected);
console.log("Is the basket not full reporting correctly?:");
console.log(result);

// ## User story 3.3 test
//* Is the basket full? *//
//arrange
theBasket.addBagel(allBagels.chickenBagel);
theBasket.addBagel(allBagels.plainBagel);
theBasket.addBagel(allBagels.mexicanBean);
theBasket.addBagel(allBagels.bananaBagel);

expected = true;

//act
actual = theBasket.isBasketFull();

//assert
result = assertEquals(actual, expected);

//report
console.log("Did it report a full basket?");
console.log(result);

bagelsInTheBasket();

// // ## User story 3.3 test
// //* If basket full, don't allow customer to add another bagel *//
// //arrange
// theBasket.addBagel(new bagel("Multigrain"));
// theBasket.addBagel(new bagel("Wheat"));
// expected = false;

// //act
// actual = addBagel
    
// //assert
// result = assertEquals(actual, expected);

// //report

// ## User story 4 test
//* Increase size of basket capacity to > 5 *//
//arrange
const startMaxCapacity = theBasket.getCapacity();
const increaseSize = 10;
expected = increaseSize;

//act
theBasket.increaseBasketSize(increaseSize);
actual = theBasket.getCapacity();

//assert
result = assertEquals(actual, expected);

//report

console.log(`Capacity was ${startMaxCapacity}. I want to increase it to ${increaseSize}. Basket size is now ${actual}.`); 
console.log(`did it do it?: ${result}`);


//Test to ensure isItFull method still functions correctly with different
//sized capacity
//arrange

theBasket.addBagel(allBagels.sesameBagel);

expected = false

//act
actual = theBasket.isBasketFull();

//assert
result = assertEquals(actual, expected);

//report
bagelsInTheBasket();

console.log(`Did it report a full basket? cap: ${theBasket.getCapacity()}  items: ${theBasket.getCount()} in the basket`);
console.log(result);
