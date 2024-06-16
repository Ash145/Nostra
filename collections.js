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

// Search Functionality

let productContainer = document.querySelector(".products-container")
let search = document.querySelector(".search")
let productList = productContainer.querySelectorAll(".products-card")

search.addEventListener("keyup", function(){
    let enteredValue = event.target.value.toUpperCase()

    for(count = 0; count < productList.length; count++){
        let productName = productList[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredValue) < 0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})