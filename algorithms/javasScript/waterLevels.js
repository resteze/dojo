/**
 * From a Chipotle interview.
 */
const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

// temp = 20
// const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3]; 
// const expected2 = 20; // 25 - 5 = 20

// 
const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

function measureWaterLevels(waterLevels) {
    let i = 0;
    let j = 1;
    let maxLevel = -1;

    while (i < waterLevels.length && j < waterLevels.length) {
        if (waterLevels[i] < waterLevels[j]) {
            // console.log("Numbers:", waterLevels[i] + ' ' + waterLevels[j])
            if (waterLevels[j] - waterLevels[i] >= maxLevel) {
                maxLevel = waterLevels[j] - waterLevels[i];
                // console.log("Max Level", maxLevel)
                j++;
            } else {
                j++
            }
        } else {
            i = j;
            j = i + 1;
        }
    };
    return maxLevel;
}

console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
