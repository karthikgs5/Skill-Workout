//HTTP GET request to an API endpoint and retrieve the response.

const axios = require("axios")


async function apiresponse(url) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

apiUrl = "http://api.ahjb.com/api"

apiresponse(apiUrl)
.then(then=> {
    console.log("Data fetched");

})
.catch(error=>
    console.log(error.message))