import http from 'http'

const server = http.createServer((req, res) => {
    res.end('Server Running sucessfully')
})

server.listen(4000, () => {
    console.log("Server running sucessfully at port http://localhost:4000/")
})