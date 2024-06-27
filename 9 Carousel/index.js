const nextEl=document.querySelector(".next")
const prevEl=document.querySelector(".prev")

const imgsEl=document.querySelectorAll("img")
const imageContainerEl=document.querySelector(".image-container")
console.log(imgsEl);

let currentImage=1
let timeout;

nextEl.addEventListener("click",()=>{
    currentImage++
    clearTimeout(timeout)
    updateImg()
    console.log(currentImage++)

})
prevEl.addEventListener("click",()=>{
    currentImage-- 
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
    imageContainerEl.style.transform=`translateX(-${(currentImage-1)*1200}px)`
   let timeout= setTimeout(()=>{
        currentImage++
        
        updateImg()
    },8000)

}