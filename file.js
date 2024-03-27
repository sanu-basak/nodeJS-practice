const fs  = require('fs')

fs.writeFileSync('./demo.txt','Hello World')
console.log(fs.readFileSync('./demo.txt','utf-8'))
fs.readFile('./demo.txt','utf-8',(err,res) => {
    console.log(res)
})
console.log(fs.writeFileSync('./demo.txt',"Welcome to nodeJs"))
console.log(fs.writeFile('./demo.txt','Welcome to nodejs world',(err,res) => {
    console.log(res)
}))

fs.appendFileSync('./demo.txt'," Hello World")
// fs.unlinkSync('./demo.txt')

module.exports = {fs}