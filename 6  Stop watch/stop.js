var is=true;
var s=0;
var m=0;
var h=0;
function start(){

  if (is==true){
    is=start;
    timer();
   }
  }
function timer(){
  if(is==start){
    s=parseInt(s);
    m=parseInt(m);
    h=parseInt(h)
    s++;
    if(s==60){
      s=0;
      m++;
    }
    if(m==60){
      m=0;
      h++;
    }
    if (s<10){
      s="0"+s;
    }
    if (m<10){
      m="0"+m;
    }
    
    if (h<10){
      h="0"+h;
    }
    
 bc.innerHTML=h+ ":" +m +":" +  s;
   
}
  setTimeout("timer()",1000);
 
  
}
function stop(){
  if (is==start){
    is=true;
  }
}
function reset(){
 is=true;
 s=0;
 m=0;
 h=0;
 bc.innerHTML="00:00:00"
}
 
