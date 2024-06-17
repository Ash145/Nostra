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


// var sliderleftbutton = document.querySelector(".slider-left-activate")
// var sliderrightbutton =document.querySelector(".slider-right-activate")
// var sliderimage= document.querySelector(".slider-image-container")
// var slidermargin=0

// console.log(sliderleftbutton)

// sliderrightbutton.addEventListener("click",

// function(){
//     slidermargin=slidermargin+100

//     if(slidermargin>200)
//     {
//         slidermargin=0
//         sliderimage.style.marginLeft=0;
//     }
//     else{
//         sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
// }
// )

// sliderleftbutton.addEventListener("click",

// function(){

//     if(slidermargin==0)
//     {
       
//         slidermargin=200
//         sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
//     else{

//         slidermargin=slidermargin-100
//     sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }   
// }
// )

let button = document.getElementById("likes")

button.addEventListener("click", function(){
    button.style.fill == "red"
    console.log(button)
})

// let likeButton = document.querySelectorAll(".like")
// let flag = false
// likeButton.forEach((button)=>{
//     button.addEventListener("click", function(button){
//        if(button.style.fill == "white"){
//             button.style.fill == "red"
//        }
//        else if(button.style.fill == "red"){
//             button.style.fill == "white"
//        }
//     })
// })

let likes = document.querySelectorAll("#likes")

likes.forEach(like => {
    like.addEventListener("click", function(){
        like.classList.toggle("red")
    })
})
