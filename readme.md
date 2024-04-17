/*** Bob's Bagels Domain Models ***/

User Story 1
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| bagel      | - name @string | - getName() | @string | 
| basket     | - contents @array[@bagel] | -addBagel(@bagel) | @boolean |

User Story 2
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| bagel      | - name @string | - getName() | @string | 
| basket     | - contents@array[@bagel] | -removeBagel(@bagel) | @boolean |

User Story 3
| Objects | Properties               | Messages             | Output   |
| ------- | ------------------------ | -------------------- | -------- |
| bagel   | - name @string           | - getName()          | @string  |
| basket  | - contents@array[@bagel] | -isBasketFull() | @boolean |