

function palindrome (string) {
    let str = string.toLowerCase()
    let str1 = str.split("").reverse().join("")
    if(str === str1) {
        return true
    }else {
       return false
    }
}

const string ="malayalam"

console.log(palindrome(string));