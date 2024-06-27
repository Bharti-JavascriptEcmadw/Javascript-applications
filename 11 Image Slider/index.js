const nextEl=document.getElementById("next")
const preEl=document.getElementById("pre")

// const imgsEl=document.querySelectorAll(".img-container")
const imageContainerEl=document.querySelector(".image-container")


let x=0;
let timer;

preEl.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    update();
    });


nextEl.addEventListener("click",()=>{
        x=x-45;
        clearTimeout(timer);
        update();
        });
update()

function update(){
  
    imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;

    timer=setTimeout(()=>{
        x=x+45;
        update()
    },5000)
    
 
}   



