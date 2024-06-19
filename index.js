///!  String Manipulation 
//? 1 .trim(), .trimStart(), .trimEnd() Retun new array or variable not change old var or array value


var z=  "   Bhrti";
var c= z.trim()
console.log(c);  // Bhrti
console.log(z);  // ____Bhrti


//? 2 .toFixed()  Retun new array or variable not change old var or array value
var x= 98.25;
console.log(x.toFixed())   // 98
console.log(x.toFixed(2));  //98.25


// ?? 3 .lenght  string total lenght and totalnumber of character in a string
// ?? .lenght is the method not .length() parenthisis is wrong here

var str="bharti Dwiv";
var bz= str.length;
console.log(bz);

//?   4    toUpperCase() toLowerCase()

       var b= "bhrti"
       var c= "DWI";
       console.log(b.toUpperCase());
       console.log(c.toLowerCase());

//?  5  Extract substring by .substr(), .substring(), .slice()
//?  slice() works like array slicing and does not swap arguments.
      //  .substr()  
    var c = 'my name is bharti';
    console.log(c.substr(3, 3));
    //   .substring()
    var cy= 'my name is bharti';
    console.log(cy.substring(4,5));
    console.log(cy.substring(4));
    console.log(cy.slice(4,5));
    console.log(cy.slice(4));
    console.log(cy.slice(8, 6));
    console.log(cy.slice(4, 35));
    console.log(cy.slice(-5, -4));

       console.log(cy.slice(-5,-8));   

      console.log(cy.slice(-8, -4));
      console.log(cy.slice(-8, -3));


  //?   6  searching method .includes(''), .indexOf('',5), .lastIndexOf('',)  these method 
  //? is used ot  search index of any character or word means to  find position 
  //? indexOf ('' 5) index of se kisi word ya letter ka index number kya hai wo pta krte hai
  //? includes check the subssting or word is existing in sentence or word or not and retuntrue false value

    var zy= "my world is full of happiness is this?"
    // console.log(zy.indexOf('is', 10));    //30
    // console.log(zy.indexOf('is'));         //9
    // console.log(zy.indexOf('kind'));       //-1 not available
    
    // console.log(zy.includes('kind'))       //false
    // console.log(zy.lastIndexOf('is'));         //35


    //  1 .length
    //  2  . trim(), .trimStart(), .trimEnd()
    //  3   .toUpperCase()
    //  4  .toLowerCase()
    //  5  .replace("" "");
    //  6  .replaceAll("" "")
    
    //  7 extract string by 3 Way
    //    1 .slice( s, e)
    //    2 .substr(s, e)
    //    3 .substring(s,e)

    // 8  searching method of string in asentence find a letter or word
    //    1 .includes("a - z")  if not then true or false ans
    //    2 .indexOf("a-z", no);  if not then  return -1 ans
    //    3 .lastIndexOf("a-z",no);

//? anynomous function 
let show =function abc(){
  console.log("he")
}
show();
let  arr=[3,2,2]
let arr1= arr.map((v)=>{
    return z= v*3;

})
// arr1
console.log(arr1);

let sho =function abc(){
  console.log("hell")
}  
// sho();
// sho();
console.log(sho);


let f= function add (nn,mm){
  // console.log(n+m);
  return (mm+nn);

};
 let s =f(1,3);


console.log(s)