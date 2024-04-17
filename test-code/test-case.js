import { assertEquals } from "./test-fundamentals"; 
import { bagel, basket } from "./production";
// ## User Story 1 Test
// Arrange
let newBagel = bagel;
newBagel.name = "Sesame";
let theBasket = basket;
const expected = "Added to basket";
let actual, result;

// Act
actual = addBagel(bagel);

// Assert
assertEquals(actual, expected);