


function result (value,delay){
  return new Promise(resolve => {
        setTimeout(()=>{
            console.log(value);
        },delay)
    })
  
}

const time = 1500;
const input = "hai"

console.log(result(input,time));