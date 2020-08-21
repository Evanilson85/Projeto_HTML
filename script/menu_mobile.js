document.querySelector(".menu").addEventListener("click", () => {

    document.querySelector(".nav").classList.add("open")

})
document.querySelector(".close").addEventListener("click", () => {

    document.querySelector(".nav.open").classList.remove("open")

})



document.querySelector(".menu").addEventListener("click", () => {

    document.querySelector(".header").classList.add("open")

})

document.querySelector(".close").addEventListener("click", () => {

    document.querySelector(".header.open").classList.remove("open")

})



// $('.carousel').carousel()