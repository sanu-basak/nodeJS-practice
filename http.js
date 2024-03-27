const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req,res) => {
    // console.log(req)
    const log = `${Date.now()} : ${req.url} New request received\n`
    fs.appendFile('log.txt',log, (err,data) => {
        switch(req.url) {
            case '/' :  res.end('Home Page') 
                    break;
            case '/contact-us' : res.end('Contact Us Page')
                    break;
            case '/about-us' : res.end('About Us Page')
                    break;
            default : res.end('404 Not Found')
        }
    })
   
})

myServer.listen(9000,() => {
    console.log('Server started')
})


