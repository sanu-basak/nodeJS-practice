const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req,res) => {
    // console.log(req)
    const log = `${Date.now()} : ${req.url} New request received\n`
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile('log.txt',log, (err,data) => {
        switch(myUrl.pathname) {
            case '/' :  res.end('Home Page '+myUrl.query.q) 
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


