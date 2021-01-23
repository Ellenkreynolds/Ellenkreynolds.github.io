let modal = document.getElementById("myModal")
let topLeft = document.querySelector(".img-1")
let span = document.querySelector(".close")

topLeft.addEventListener("click", (evt) => {
  modal.style.display="block"
})

span.addEventListener("click", (evt) => {
 modal.style.display="none"
})

window.addEventListener("click", (evt) => {
    if(evt.target == modal){
        modal.style.display="none"
    }
})
