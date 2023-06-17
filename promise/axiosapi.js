

const axios = require("axios")

async function getData (url) {
        return new Promise((resolve,reject)=>{
            axios.get(url)
            .then(response => resolve(response.data))
            .catch(error => reject (error))
        })
}


api= "http://gsjhgv.com/shk"

getData(api)
.then(data => {
    console.log("Data fetched "+data);
}).catch(error => console.log(error.message))