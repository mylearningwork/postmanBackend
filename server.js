const http = require('http')
const port = process.env.PORT || 3001
const app = require('./index')

const server = http.createServer(app)

server.listen(port, () => {
    //this instruction is console.log the port
    console.log("server is listening: " + port)
})