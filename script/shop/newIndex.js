var btn = document.querySelectorAll(".color")
var active = document.querySelector(".active")

btn.forEach( e => {
    e.addEventListener("click", myColor)
    console.log(myColor)
})

function myColor(){

    btn.forEach( e =>{
        e.classList.remove("active");
    })
    this.classList.add("active")

}
