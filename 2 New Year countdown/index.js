// let days=0;
// let m=0;
// let h=0;
// let s=0;
const newyeartime =new Date('May 15, 2025 06:00:00 ').getTime();
updatee();


function updatee(){
    // console.log(newyeartime)

const now=new Date().getTime();
const gap=newyeartime-now;
// console.log(gap);
const second=1000;
const minute=second*60;
const hour=minute*60;
const days=hour*24;
const d=Math.floor(gap/days);
const h=Math.floor((gap% days)/hour)
const m=Math.floor((gap%hour)/minute);
const s=Math.floor((gap%minute)/second);
console.log(h);
console.log(d)

apple.innerHTML=d;
// console.log(d
bh.innerHTML=h;
min.innerHTML=m;
sec.innerHTML=s;
setTimeout(updatee,1000);

}
;


