const socket =io()

const form=document.querySelector("form")
const input=document.querySelector("input")

form.addEventListener('submit',(e)=>{
e.preventDefault()
if(input.value){
socket.emit("chat messsage", input.value)
input.value=""
}


})