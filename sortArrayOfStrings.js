//  sort an array of strings in alphabetical order.


function sortArrayOfString (arr) {
    return arr.sort((a,b) => {
        const string1 = a.toLowerCase()
        const string2 = b.toLowerCase()
        if(string1< string2) {
            return -1
        }if(string1>string2) {
            return 1
        }
        return 0
    })
}

const strings = ["banana", "Apple", "cherry", "date"];
console.log(sortArrayOfString(strings));