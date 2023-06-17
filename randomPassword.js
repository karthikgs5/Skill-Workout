// generate a random password with a given length.................

function randomPassword(length) {
    const digits = '123456789'
    let password=''
  for(let i=0 ;i<length ;i++) {
    let result = Math.floor(Math.random()*digits.length)
    password+= digits.charAt(result)
  }
  return password
}
length = 5

console.log(randomPassword(length));