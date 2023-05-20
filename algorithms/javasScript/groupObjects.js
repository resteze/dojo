/* 
  Given two strings strA and strB containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const strA1 = "ab#c";
const strB1 = "ad#c";
const expected1 = true;
// Explanation: Both strA1 and strB1 become "ac"

const strA2 = "ab##";
const strB2 = "c#d#";
const expected2 = true;
// Explanation: Both strA2 and strB2 become ""

const strA3 = "a##c";
const strB3 = "#a#c";
const expected3 = true;
// Explanation: Both strA3 and strB3 become "c"

const strA4 = "a#c";
const strB4 = "b";
const expected4 = false;

// Explanation: strA4 becomes "c" while strB4 becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(strA, strB) {
    finalA = ''
    finalB = ''
    for (char of strA) {
        if (char !== '#') {
            finalA += char
        }
        else {
            finalA -= char - 1
        }
        console.log(finalA)
    }
    if (finalA === finalB) {
        return true
    }
    return false
}
console.log(backspaceStringCompare(strA1, strB1))
/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.

Given an array of objects that contain a category key,
return a hash table to group the objects by their category.

Make the grouping case-insensitive.

Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */



function groupObjects(items) {
    const cateHash = {}; //empty hashmap
    for (const item of items) { //loops through the objects in the array
        if (cateHash[item.category]) { //checks if hashmap has a key 
            cateHash[item.category].push(item); //true -> push whole object
        } else {
            cateHash[item.category] = [item]; //false -> create key, setting value to whole object
        }
    }
    return cateHash;
}
console.log(groupObjects(objects));