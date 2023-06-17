//calculates the average of numbers in an array, excluding any negative numbers.

function avgOfArraay (array) {
    if (array.length===0) {
        throw new Error("No elements in Array")
    }
    const arr = array.filter(num => num>=0)
    if(arr.length===0){
        throw new Error("No positive elements in this array")
    }
    const sum = arr.reduce((a,b)=> a+b,0)
    const avg = sum/arr.length
    return avg

}

let array = [3, 7, 1, 9, 5]

console.log(avgOfArraay(array));