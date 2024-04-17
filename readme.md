# Bob's Bagels Pair-Programming Project

## Domain Models

<b><i>User Story 1</b> </i>
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| Bagel      | - name @String | - getName() | @String | 
| Basket     | - contents @Array[@Bagel] | - addBagel(@Bagel) | @String |

<b><i>User Story 2</b> </i>
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| Bagel      | - name @String | - getName() | @String | 
| Basket     | - contents @Array[@Bagel] | - removeBagel(@Bagel) | @String |

<b><i>User Story 3</b> </i>
| Objects | Properties               | Messages             | Output   |
| ------- | ------------------------ | -------------------- | -------- |
| Bagel   | - name @String           | - getName()          | @String  |
| Basket  | - contents @Array[@Bagel] <br> - maxBasketSize @Int | - isBasketFull() <br>     | @Boolean <br> |

<b><i>User Story 4</b> </i>
| Objects | Properties               | Messages        | Output   |
| ------- | ------------------------ | --------------- | -------- |
| Basket  | - maxBasketSize @Int | - increaseCapacity(@Int) | @Int |

<b><i>User Story 5</b> </i>
| Objects | Properties               | Messages        | Output   |
| ------- | ------------------------ | --------------- | -------- |
| Bagel   | - name @String           |                 | @String  |
| Basket  | - contents @array[@Bagel] | - removeBagel(@Bagel) | @String |

<b><i>User Story 6</b> </i>
| Objects | Properties               | Messages        | Output   |
| ------- | ------------------------ | --------------- | -------- |
| Bagel   | - name @String           |                 | @String  |
| Basket  | - contents @Array[@Bagel] | - addBagel(@Bagel) | @String |

<b><i>User Story 7</b> </i>
| Objects | Properties                | Messages           | Output  |
| ------- | ------------------------- | ------------------ | ------- |
| Bagel   | - price @Float            |  - getPrice()      | @Float  |

<b><i>User Story 8</b> </i>
| Objects | Properties     | Messages     | Output |
| ------- | -------------- | ------------ | ------ |
| Basket  | - total @Float | - getTotal() | @Float |
