const changeButton = document.querySelector(".char-img");
const CharList = document.querySelectorAll(".char-list");

CharList[1].classList.add("non-active-list");
CharList[2].classList.add("non-active-list");
let i = 0;
changeButton.addEventListener("click", ()=>{
    i = i + 1;
    if(i == 1){
        CharList[1].classList.remove("non-active-list");
    }
    if(i == 2){
        CharList[2].classList.remove("non-active-list");
    }
    if(i == 3){
        CharList[0].classList.add("non-active-list");
    }
    if( i == 4){
        CharList[1].classList.add("non-active-list");
    }
    if(i == 5){
       CharList[0].classList.remove("non-active-list");
       i = 0;
    }
})

const back = document.querySelector(".graph-back");
const next = document.querySelector(".graph-next");
const GraphImg = document.querySelectorAll(".graph-img");
const GraphText = document.querySelectorAll(".graph-text");
const GraphSubText = document.querySelectorAll(".graph-subtext");
back.classList.add("active-btn");

next.addEventListener("click", ()=> {

    back.classList.remove("active-btn");
    i = i + 1;
    if( i == 1){
        GraphImg[0].src = "./images/IMAGE (23).png";
        GraphImg[1].src = "./images/IMAGE (24).png";
        GraphImg[2].src = "./images/IMAGE (25).png";
        GraphText[0].textContent = "Waves";
        GraphText[1].textContent = "Drops";
        GraphText[2].textContent = "Ocean";
        GraphSubText[0].textContent = "Photography";
        GraphSubText[1].textContent = "Website";
        GraphSubText[2].textContent = "Website";

                
back.addEventListener("click", () =>{
     
    GraphImg[0].src = "./images/IMAGE (18).png";
    GraphImg[1].src = "./images/IMAGE (19).png";
    GraphImg[2].src = "./images/IMAGE (20).png";
    GraphText[0].textContent = "Woods";
    GraphText[1].textContent = "Path";
    GraphText[2].textContent = "Darkness";
    GraphSubText[0].textContent = "Photography";
    GraphSubText[1].textContent = "Website * Photography";
    GraphSubText[2].textContent = "Website";
    back.classList.add("active-btn");
    i = i - 1;
    

})
    }
    if(i==2){
        next.classList.add("active-btn");
        GraphImg[0].src = "./images/IMAGE (26).png";
        GraphImg[1].src = "./images/IMAGE (27).png";
        GraphImg[2].src = "./images/IMAGE (28).png";
        GraphText[0].textContent = "Town";
        GraphText[1].textContent = "Mountain";
        GraphText[2].textContent = "Camera";
        GraphSubText[0].textContent = "Website";
        GraphSubText[1].textContent = "Website";
        GraphSubText[2].textContent = "Website";
         
back.addEventListener("click", () =>{
     
    GraphImg[0].src = "./images/IMAGE (23).png";
    GraphImg[1].src = "./images/IMAGE (24).png";
    GraphImg[2].src = "./images/IMAGE (25).png";
    GraphText[0].textContent = "Waves";
    GraphText[1].textContent = "Drops";
    GraphText[2].textContent = "Ocean";
    GraphSubText[0].textContent = "Photography";
    GraphSubText[1].textContent = "Website";
    GraphSubText[2].textContent = "Website";
    i = i - 1;
    next.classList.remove("active-btn");
    back.classList.remove("active-btn");

                   
back.addEventListener("click", () =>{
     
    GraphImg[0].src = "./images/IMAGE (18).png";
    GraphImg[1].src = "./images/IMAGE (19).png";
    GraphImg[2].src = "./images/IMAGE (20).png";
    GraphText[0].textContent = "Woods";
    GraphText[1].textContent = "Path";
    GraphText[2].textContent = "Darkness";
    GraphSubText[0].textContent = "Photography";
    GraphSubText[1].textContent = "Website * Photography";
    GraphSubText[2].textContent = "Website";
    back.classList.add("active-btn");
    
    

})

})
      
    }
 
})

