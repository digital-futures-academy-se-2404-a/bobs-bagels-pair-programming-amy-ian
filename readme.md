# Bob's Bagels Pair-Programming Project

## Domain Models

<b><i>User Story 1</i></b>
<br>![User Story 1: As a customer I want to be able to add a bagel to the basket](image.png)
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| Bagel      | - name @String | - getName() | @String | 
| Basket     | - contents @Array[@Bagel] | - addBagel(@Bagel) | @String |

<b><i>User Story 2</i></b>
<br>![User Story 2: As a customer I want to be able to remove a bagel from the basket](image-1.png)
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| Bagel      | - name @String | - getName() | @String | 
| Basket     | - contents @Array[@Bagel] | - removeBagel(@Bagel) | @String |

<b><i>User Story 3</i></b> 
<br>![User Story 3: As a customer I want to see when my basket is full](image-2.png)
| Objects | Properties               | Messages             | Output   |
| ------- | ------------------------ | -------------------- | -------- |
| Bagel   | - name @String           | - getName()          | @String  |
| Basket  | - contents @Array[@Bagel] <br> - maxBasketSize @Int | - isBasketFull() <br>     | @Boolean <br> |

<b><i>User Story 4</i></b> 
<br>![User Story 4: As a manager I want to be able to increase the size of the basket](image-3.png)
| Objects | Properties               | Messages        | Output   |
| ------- | ------------------------ | --------------- | -------- |
| Basket  | - maxBasketSize @Int | - increaseCapacity(@Int) | @Int |

<b><i>User Story 5</i></b>
<br>![User Story 5: As a customer I don't want to be able to remove bagels that aren't already in my basket](image-4.png)
| Objects | Properties               | Messages        | Output   |
| ------- | ------------------------ | --------------- | -------- |
| Bagel   | - name @String           |                 | @String  |
| Basket  | - contents @array[@Bagel] | - removeBagel(@Bagel) | @String |

<b><i>User Story 6</i></b> 
<br>![User Story 6: As a customer I don't want to be able to add a bagel already in the basket](image-6.png)
| Objects | Properties               | Messages        | Output   |
| ------- | ------------------------ | --------------- | -------- |
| Bagel   | - name @String           |                 | @String  |
| Basket  | - contents @Array[@Bagel] | - addBagel(@Bagel) | @String |

<b><i>User Story 7</i></b> 
<br>![User Story 7: As a customer I want to know the price of the bagel](image-7.png)
| Objects | Properties                | Messages           | Output  |
| ------- | ------------------------- | ------------------ | ------- |
| Bagel   | - price @Float            |  - getPrice()      | @Float  |

<b><i>User Story 8</i></b> 
<br>![User Story 8: As a customer I want to have the basket tell me the price of the bagels in it](image-8.png)
| Objects | Properties     | Messages     | Output |
| ------- | -------------- | ------------ | ------ |
| Basket  | - total @Float | - getTotal() | @Float |
