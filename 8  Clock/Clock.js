const b=document.querySelector("#hour");
const c=document.querySelector(".min");
// const d=document.querySelector(".sec");
const e= document.getElementsByClassName("sec");
console.log(e);



function clock(){
    const Cd=new Date();
    // console.log(Cd);
    // console.log(Cd)
    const hour=Cd.getHours()*30;
    const min=Cd.getMinutes()*6;
    const sec=Cd.getSeconds()*6;
    console.log(hour);
    console.log(Cd.getHours())
    // const de=(hour/12)*360;
    // const df=(min/60)*360;
    // const dg=(sec/60)*360;


    // console.log(de)
    // console.log(b);
    b.style.transform=`rotate(${hour}deg)`;
    c.style.transform=`rotate(${min}deg)`;
    e[0].style.transform=`rotate(${sec}deg)`;

    setTimeout(clock,1000)


}
clock();

