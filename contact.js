let sideNav = document.querySelector(".side-nav")
let openNav = document.getElementById("open-nav")
let closeNav = document.querySelector(".close-nav")

openNav.addEventListener("click", function(){
    sideNav.style.left = "0"
})

closeNav.addEventListener("click", function(){
    sideNav.style.left = "-50%"
})
