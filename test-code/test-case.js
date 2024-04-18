import { assertEquals } from "./test-fundamentals.js"; 
import { bagel, basket } from "./production.js";
// ## User Story 1 Test
// Arrange
const sesameBagel = new bagel("Sesame");
const currantBagel = new bagel("Currant");
let theBasket =  new basket();
const expected = "Added to basket";
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