const nextEl=document.querySelector(".next")
const imgsEl=document.querySelectorAll(".img")


const imageContainerEl=document.querySelector(".image-container")


let currentImage=1
let timeout;

nextEl.addEventListener("click",()=>{
    currentImage++
    clearTimeout(timeout)
    updateImg()
    console.log(currentImage++)

})
updateImg()

function updateImg(){
    if (currentImage>imgsEl.length){
        currentImage=1
    }
    else if(currentImage<1){
        currentImage=imgsEl.length;
    }
    imageContainerEl.style.transform=`translateX(-${(currentImage-1)*200}px)`
   let timeout= setTimeout(()=>{
        currentImage++
        
        updateImg()
    },3000)

}   


const prevEl=document.querySelector(".prev")
prevEl.addEventListener('click',()=>{
    currentImage--;
    clearTimeout(timeout)
    updateImg()
})
