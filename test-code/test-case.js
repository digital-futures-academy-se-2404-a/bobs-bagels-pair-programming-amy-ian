import { assertEquals } from "./test-fundamentals.js"; 
import { basket } from "./basket.js";
import allBagels from "./test-bagels.js";

// ## User Story 1.1 Test - Add bagel to basket and check if basket length increased by 1
// Arrange
let theBasket = new basket();
let expected = "Added to basket";
let actual, result;

//-- Housekeeping --//
//* List bagels currently in basket
function bagelsInTheBasket() {
    let bagelsInBasket = theBasket.getContents();
    console.log("Bagels in Basket:");
    bagelsInBasket.forEach((item) => {
        console.log(item);
        return item;
    });
}
//* Clear variables
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    theBasket.contents = [];
    theBasket.capacity = 5;
};

// Act
actual = theBasket.addBagel(allBagels.sesameBagel);

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 1.1`);
console.log(`==================`);
console.log("Add bagel increased basket length by 1");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 1.2 Test - Add bagel to basket and check if bagel was actually added to basket
// Arrange
expected = "Added to basket";

// Act
actual = theBasket.addBagel(allBagels.currantBagel);

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 1.2`);
console.log(`==================`);
console.log("Added bagel is now in basket");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 1.3 Test - Check if I can add more than one bagel to basket
// Arrange
expected = 2;
theBasket.addBagel(allBagels.currantBagel);
theBasket.addBagel(allBagels.sesameBagel);

// Act
actual = theBasket.contents.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 1.3`);
console.log(`==================`);
console.log("Basket length matches amount added");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 2 Test - Remove bagel from basket
// Arrange
theBasket.addBagel(allBagels.currantBagel);
theBasket.addBagel(allBagels.sesameBagel);
expected = "Removed from basket";

//Act
actual = theBasket.removeBagel(allBagels.sesameBagel);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 2`);
console.log(`==================`);
console.log("Bagel was removed from basket");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

// ## User story 3.1 test - Check if basket is reporting correct amount in basket
// arrange
theBasket.addBagel(allBagels.currantBagel);
expected = 1;

//act
actual = theBasket.getCount();

//assert
result = assertEquals(actual, expected);

//report
console.log(`Test 3.1`);
console.log(`==================`);
console.log("Able to say how many bagels are in the basket?");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

// ## User story 3.2 test - Check to see if basket is not full when adding less than 5 bagels
// arrange
theBasket.addBagel(allBagels.currantBagel);
theBasket.addBagel(allBagels.sesameBagel);
expected = false;

//act
actual = theBasket.isBasketFull();

//assert
result = assertEquals(actual, expected);

//report
console.log(`Test 3.1`);
console.log(`==================`);
console.log("Is the basket reporting not full correctly?");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

// ## User story 3.3 test - Report a full basket when there are 5 bagels in the basket
//* Is the basket full? *//
//arrange
theBasket.addBagel(allBagels.sesameBagel);
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
console.log(`Test 3.3`);
console.log(`==================`);
console.log("Did it report a full basket?");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();

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

//report

// ## User story 4.1 test - Increase size of basket capacity to > 5
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
console.log(`Test 4.1`);
console.log(`==================`);
console.log(`Capacity was ${startMaxCapacity}. I want to increase it to ${increaseSize}. Basket size is now ${actual}.`); 
console.log("Basket capacity increased");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//## User story 4.2 test - Test to ensure isItFull method still functions correctly with different sized capacity
//arrange
theBasket.increaseBasketSize(6);
theBasket.addBagel(allBagels.sesameBagel);
theBasket.addBagel(allBagels.currantBagel);
theBasket.addBagel(allBagels.everythingBagel);
theBasket.addBagel(allBagels.chickenBagel);
theBasket.addBagel(allBagels.mexicanBean);
theBasket.addBagel(allBagels.bananaBagel);
expected = true

//act
actual = theBasket.isBasketFull();

//assert
result = assertEquals(actual, expected);

//report
console.log(`Test 4.2`);
console.log(`==================`);
console.log(`Capacity: ${theBasket.getCapacity()}. Items: ${theBasket.getCount()} in the basket.`); 
console.log("Is full method still works with different capacity");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
bagelsInTheBasket();
console.log(`==================`);

// Clean Up
afterEach();


//## User Story 5 - Test to ensure unable to remove bagels not in basket
//arrange
theBasket.addBagel(allBagels.sesameBagel);
theBasket.addBagel(allBagels.currantBagel);
console.log(`bagels added to basket:`);
bagelsInTheBasket();
console.log(`==================`);
expected = "Bagel not in basket";

//act
actual = theBasket.removeBagel(allBagels.bananaBagel);

//assert
result = assertEquals(actual, expected);

//report
console.log(`Test 5.1`);
console.log(`==================`);
    console.log(`Attempt to remove banana bagel from a basket containing: ${result ? 'Pass' : `Fail \n Expected: ${expected} Actual: ${actual}`}    
    `);
    if (!result) {bagelsInTheBasket()}
