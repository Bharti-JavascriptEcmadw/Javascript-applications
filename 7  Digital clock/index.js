// const hourl=document.getElementById("hour");
// const minel=document.getElementById("min");
// const secel=document.getElementById("sec");
// const ampmel=document.getElementById("ampm");  
// console.log(minel);

document.addEventListener("DOMContentLoaded", function() {

function update(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm="AM";
    console.log(h);
    if(h>12){
        h=h-12;
        ampm="PM";
    };
    h=h<10? "0"+h :h;
    m=m<10? "0"+m :m;
    s=s<10? "0"+s :s;
    // console.log(h)
    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    // amm.innerHTML=ampm;
    setTimeout(()=> {
     update()
    },1000)
}
update();

}
)
