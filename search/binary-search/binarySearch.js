/*
Function should take a sorted array and item
- if the item exists, the function should return its position

Q: How do search methods in js do the search
*/

function binarySearch(arr, target) {
    let startIndex = 0 // starting index
    let endIndex = arr.length - 1 // last index
    let midIndex
    // let guess

    while (startIndex <= endIndex) {
        midIndex = Math.floor((startIndex + endIndex) / 2)

        if (arr[midIndex] === target) {
            return midIndex
        }

        if (arr[midIndex] > target) {
            endIndex = midIndex - 1
        }

        if (arr[midIndex] < target) {
            startIndex = midIndex + 1
        }
    }

    return -1
}

console.log(binarySearch([-1, 2, 3, 7, 15], -1))
