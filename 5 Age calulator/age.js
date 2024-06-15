function calculate(){
    // console.log(cd.value.slice(0,4));
    let month;
    let year;
    let day;
    let currentDay=parseInt(cd.value.slice(8,10),10);
    let currentMonth=parseInt(cd.value.slice(5,7),10);
    let currentYear=parseInt(cd.value.slice(0,4),10);
    console.log(currentDay,currentMonth,currentYear);
    // abhe value console me integer me print hoge and string me tab print hote hai jab 01 05 etc me 0 laga ho age //
    let birthDay=parseInt(dob.value.slice(8,10),10);
    let birthMonth=parseInt(dob.value.slice(5,7),10);
    let birthYear=parseInt(dob.value.slice(0,4),10);
    console.log(birthDay,birthMonth,birthYear);
    
    if (currentDay>=birthDay)
    {
        day=currentDay-birthDay;
    }
    else{
        let c =new Date(currentYear, currentMonth, 0). getDate()
        day=currentDay+ c-birthDay;
        console.log(c);
       
        currentMonth--;
        
    }
    if(currentMonth>= birthMonth){
        month= currentMonth-birthMonth;
    }
    else{
        month=  currentMonth +12 - birthMonth;
        currentYear--;
    }


    year=currentYear-birthYear;


    if(year<0)
    {
       text.innerHTML="mai buddhe ho gae";
    }
    else{
      text.innerHTML = year +" years, "+ month+ "months," +day + "days"+ ""+"main buddhe ho gae ";
    }

    console.log(year,month,day);
    // console.log(day);
}
let c =new Date(2024, 0, 0). getDate();
// day=currentDay+ c-birthDay;
console.log(c);



