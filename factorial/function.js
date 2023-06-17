

function factorial (num)  {
    if(num<0){
        throw new Error("negative number")
    }
    let factorial =1
    for(let i=2 ;i<=num;i++) {
        factorial*=i
    }
    return factorial
}

module.exports = factorial