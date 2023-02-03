/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
    var centTemp = cents
    var totalChange = {}
    
    while (centTemp > 0){
        if (centTemp >= 25){
            centTemp -= 25
            if ('quarter' in totalChange ){
                totalChange['quarter'] += 1
            }
            else{
                totalChange['quarter'] = 1
            }
        } 
        else if(centTemp >= 10){
                centTemp -= 10
                if ('dime' in totalChange ){
                    totalChange['dime'] += 1
                }
                else{
                    totalChange['dime'] = 1
                }
            } 
        else if(centTemp >= 5){
            centTemp -= 5
            if ('nickel' in totalChange ){
                totalChange['nickel'] += 1
            }
            else{
                totalChange['nickel'] = 1
            }
        } 
        else{
            centTemp -= 1
            if ('penny' in totalChange ){
                totalChange['penny'] += 1
            }
            else{
                totalChange['penny'] = 1
            }
        } 
    }
    return totalChange
}
console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))