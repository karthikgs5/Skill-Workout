
const fetch = require("node-fetch")

fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json")
.then(response => response.json())
.then(data => {
    console.log("data recieved");
    console.log(data);
})
.catch(error=>{
    console.log(error.message);
})