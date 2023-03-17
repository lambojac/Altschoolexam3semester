const express=require("express")
const app=express()
const path=require("path")
const http=require("http")
const server=http.createServer(app)
const {Server}=require('socket.io')
const io=new Server(server)

app.use(express.static(path.join(__dirnamt,"client")))

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname, "client","index.html"))
})

io.on("connection",(socket) =>{
console.log(`A user with id:${socket.client.id}conect`)

socket.on("chat message",(msg)=>{
io.emit("incoming",msg)
console.log("message"+msg)

socket.on("disconnect",()=>{
console.log("user disconnected")
})
})
})

server.listen(3000,() =>{
console.log("listening on port 3000")
})