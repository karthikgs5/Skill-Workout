

function sumOfArray (array) {
    const result = array.reduce((a,b)=> {
        return a+b
    },0)
    console.log(result);
}


let a = [3, 7, 1, 9, 4]
sumOfArray(a)