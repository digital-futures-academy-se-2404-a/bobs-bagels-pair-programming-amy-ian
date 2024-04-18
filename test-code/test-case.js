import { assertEquals } from "./test-fundamentals.js"; 
import { bagel, basket } from "./production.js";
// ## User Story 1 Test
// Arrange
const sesameBagel = new bagel("Sesame");
const currantBagel = new bagel("Currant");
let theBasket =  new basket();
let expected = "Added to basket";
let actual, result;

// Act
actual = theBasket.addBagel(sesameBagel);
theBasket.addBagel(currantBagel);

// Assert
result = assertEquals(actual, expected);

//report
console.log("Added to basket?");
console.log(result);

let bagelsInBasket = theBasket.getContents();
console.log("Bagels in Basket:")
bagelsInBasket.forEach(item => {
    console.log(item);    
});

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
bagelsInBasket = theBasket.getContents();
console.log("Bagels in Basket:")
bagelsInBasket.forEach(item => {
    console.log(item);    
});

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
console.log("Is the basket full?:");
console.log(result);

// ## User story 3.3 test
//* Is the basket full? *//
//arrange
theBasket.addBagel("Chicken");
theBasket.addBagel("Plain");
theBasket.addBagel("Mexican Bean");
theBasket.addBagel("Banananana");

expected = true;

//act
actual = theBasket.isBasketFull();

//assert

result = assertEquals(actual, expected);

//report
console.log("Did it report a full basket?");
console.log(result);
