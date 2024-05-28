console.log("hello world");

const http = require('http')
http.createServer((req,res)=> {
    res.writeHead(200,'OK',{'Content-Type':'text/html'})
    res.end('<h1>Hello Node!!!!</h1>\n')
}).listen(3000)