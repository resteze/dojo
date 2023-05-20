// helper funtion to check if it is a letter
const isAlpha = str => /^[a-zA-Z]*$/.test(str);

function rehash(str) {
    const counts = {} // keeps track of the values corresponding to each letter
    let result = "" // to return at the end

    for (let i = 0; i < str.length; i++) {
        current = str[i]
        if (isAlpha(current)) { // if it is a letter we want to do some operations
            let j = i + 1;
            let num = '' // string to keep get the number part
            while (!(isAlpha(str[j]))) { // while the character we are pointing at is not a letter...
                num += str[j] // add the current character (which is a number) to the num string
                j++;
            }

            if (counts.hasOwnProperty(str[i])) { // check to see if our counts hashmap has the current letter in there
                counts[str[i]] += parseInt(num) // if it has, we want to add the number to the value
            } else {
                counts[str[i]] = parseInt(num) // if not, create the key-value pair
            }
        }
    }

    const sortedKeys = Object.keys(counts).sort() // gets all the keys from our hashmap(which would be our unique letter) and sortes them, return an array of keys
    for (const eachKey of sortedKeys) {
        result += eachKey + counts[eachKey] // for each key, we add the key letter and the value of that key from our counts hashmap
    }
    return result;
}
function lengthOfLongestSubString(str) {
    let start = 0;
    let maxLength = 0;
    for (i = 0; i < str.length; i++) {
        for (j = start; j < i; j++) {
            if (str[i] === str[j]) {
                start = j + 1;

                break;
            }
        }

        //  update maxLength
        if (i - start + 1 > maxLength) {
            maxLength = i - start + 1;
        }
    }
    return maxLength;


}