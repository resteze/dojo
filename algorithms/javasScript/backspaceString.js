function backspaceString(str) {
    const strArr = []
    for (const character of str) {
        if (character === "#") {
            if (strArr.length != 0) {
                strArr.pop()
            }
        } else {
            strArr.push(character)
        }
    }
    return strArr.join("")
}

function backspaceStringCompare(strA, strB) {
    const joinedA = backspaceString(strA)
    const joinedB = backspaceString(strB)
    return joinedA === joinedB
}
function groupObjects(items) {
    let output = {}

    for (const obj of items) {
        if (output.hasOwnProperty(obj.category.toLowerCase())) {
            output[obj.category.toLowerCase()].push(obj)
        } else {
            output = { ...output, [obj.category.toLowerCase()]: [] }
            output[obj.category.toLowerCase()].push(obj)
        }
    }

    return output
}

console.log(groupObjects(objects))