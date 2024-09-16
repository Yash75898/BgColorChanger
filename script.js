const start = document.getElementById("start")
const end = document.getElementById("end")

const randomColor = function(){
    let letters = "0123456789ABCDEF";
let color = '#'; 
for (let i = 0; i < 6; i++) 
    color += letters[(Math.floor(Math.random() * 16))]; 
return color
}

let intervalId;

start.addEventListener("click" , () =>{
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 500);
})

end.addEventListener("click" , () => {
    clearInterval(intervalId)
})
