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