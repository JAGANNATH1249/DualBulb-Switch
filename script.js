const switchBtns = document.querySelectorAll(".switch")
const bulbs = document.querySelectorAll(".bulbTop")

const toggleSwitch =(index)=>{
    console.log(index)
    if(!bulbs[index].classList.contains("ON")){
        bulbs[index].classList.add("ON")
    }
    else{
        bulbs[index].classList.remove("ON")
    }
}

switchBtns.forEach((btn,index)=>{
    console.log(btn)
    btn.addEventListener("click", ()=>toggleSwitch(index))
})