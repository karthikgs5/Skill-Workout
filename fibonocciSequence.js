//Fibonacci sequence up to a given number of terms.

function fibonocci (number) {
    if(number<=0) {
        return null
    }
    if(number === 1) {
      return [0]
    }
    const array = [0,1]
    while(array.length<number) {
        const newNumber = array[array.length-1] + array[array.length-2]
        array.push(newNumber)
    }
    return array

}

console.log(fibonocci(5));


// using recursion

function fibonocciSequence (number) {
    if(number<=0) {
        return []
    }
    if(number === 1) {
      return [0]
    }
    if(number === 2) {
        return [0,1]
    }

    var array = fibonocciSequence(number-1)
    array.push(array[array.length-1] + array[array.length-2])
    return array
}

console.log(fibonocciSequence(5));