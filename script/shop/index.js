var cor = document.querySelectorAll(".color")
var active = document.querySelector(".active")
var produtos = document.querySelector(".produtos")

produtos.getAttribute("teste")

console.log(produtos)

var camisa = document.querySelector(".imgShirt")
var ativo = document.querySelector(".ativo")




function changeColor() {

    if (active) {
      
        cor.forEach(function (e) {
            e.classList.remove("active")
        })
        this.classList.add('active');      
    }
 
}


cor.forEach(e => {
    e.addEventListener("click", changeColor)

  console.log(e.primary)
})

