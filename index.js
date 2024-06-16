let sideNav = document.querySelector(".side-nav")
let openNav = document.getElementById("open-nav")
let closeNav = document.querySelector(".close-nav")
let offer = document.querySelector(".offer")
let closeOffer = document.querySelector(".close-offer")

openNav.addEventListener("click", function(){
    sideNav.style.left = "0"
})

closeNav.addEventListener("click", function(){
    sideNav.style.left = "-50%"
})

closeOffer.addEventListener("click", function(){
    offer.style.display = "none"
})