const http = require("http")

http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain')
    res.end("Hello World")
})

server.listen(3000,()=> {
    console.log("Server Running");
})