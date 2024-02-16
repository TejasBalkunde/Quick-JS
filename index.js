// 1. Ways to print in JS //JavaScript = JS
//console.log("Hello world");
//alert("me");
//document.write("this is doc write");

// 2. JS console API
// console.log("Hello world", 6*2, "Another log");
// console.warn("this is a warning"); 
// console.error("this is a error"); 

// 3. JS Variables
//variables -> Containers to store data values
var num1 = 10;
var num2 = 2;
//console.log(num1 - num2);

// 4. Data types in JS
//Numbers
var n1 = 32405;
var n2 = 12.22;

//String
// var str1 = "This is a String";
// var str2 = 'This is also a String';

//Objects
var marks = {
    tejas : 99.75,
    ravi : 55,
    eratorsteju : 65
}

//Boolean
var a = true;
var b = false;
//console.log(a,b);
//undefined
var und = undefined;
//console.log(und); //it prints "undefined"
var undo;
//console.log(undo); //it also prints "undefined" coz its value not defined yet
//null
var n = null;
//console.log(n); //it prints null

/*At a very high level, there are 2 types of data types in JS
1. Primitive datatypes(6)-> undefined,null,numbers,string,boolean,symbol
2. Reference data types-> Arrays & objects
*/
//Arrays
var arr = [1,"babu",2,"Shona",4,5];

//Operators
// 1.Arithmetic operators
var c = 6;
var d = 4;
// console.log("The  value of c + d = ", c+d);
// console.log("The  value of c - d = ", c-d);
// console.log("The  value of c * d = ", c*d);
// console.log("The  value of c / d = ", c/d);

// 2.Assignment operators
var e = d;
e += 2
// console.log(e);

// 3.Comparison operator
var x = 34;
var y = 43;
// console.log(x >= y);
// console.log(x == y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// 4.Logical operators 
//Logical And
// console.log(true && true);  //And(&&) :- only 1&&1->1 otherwise 0
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical Or
// console.log(true || true);  //OR(||) :- only 0||0->0 otherwise 1
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical Not (!)
// console.log(!true);
// console.log(!false);

//Functions in JS
function avg(p, q)
{
    return (p+q)/2
}
//DRY -> Do not repeat yourself
c1 = avg(4,6);
c2 = avg(14,16);
// console.log(c1 ,c2);

//Conditionals in JS
var age = 112;
//Single if 
// if(age>18)
// {
//     console.log("You can drive")
// }
//if-else
// if(age>18)
// {
//     console.log("You can drive")
// }
// else
// {
//     console.log("You cannot drive")
// }
//if-else ladder
// if(age>18)
// {
//     console.log("You can drive")
// }
// else if(age>35)
// {
//     console.log("Young");
// }
// else 
// {
//     console.log("You cannot drive")
// }

//Loops in JS
//normal for loop
var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0; i<arr.length; i++)
// {
//     if(i == 2){
//         //break; //break all iterations //1 2
//         continue;//cancel current iteration //1 2 4 5 6 7
//     }
//     console.log(arr[i]);
// }
//for each loop
// arr.forEach(function(ele)
// {
//     console.log(ele);
// })

//while loop
// let j = 0;  
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
//}
//do-while loop
// do
// {
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

let myarr = ["Fan", "van", 12, 22, null];
// console.log(myarr);
//Array methods
// console.log(myarr.length);
// myarr.pop();
// myarr.push("Tej");
// myarr.shift(); //remove first element
// myarr.unshift("Tej"); //add at first element
// console.log(myarr.unshift("Tej")); //length after unshift
// console.log(myarr);

//String methods in JS
let s = "Tejas is a good boy & intelligent boy also";
// console.log(s.length);
// console.log(s.indexOf("boy")); // first vala boy
// console.log(s.lastIndexOf("boy")); //last wala boy
// console.log(s.slice(0,5 ));
// d = s.replace("Tejas", "Shweta"); //only replace first occurence 
// console.log(d,s);
// e = d.replace("boy", "Girl");
// console.log(e,d,s);

let mydate = new Date();
// console.log(mydate); //whole time,date
// console.log(mydate.getTime()); //Time in seconds
// console.log(mydate.getFullYear()); //get year
// console.log(mydate.getDay()); //Tuesday->2 (sun=0,...,sat=6)
// console.log(mydate.getMinutes()); //get minutes
// console.log(mydate.getHours()); //get hours

//DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "Yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text");

//selecting using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log("The button was clicked");
// }
// window.onload = function(){
//     console.log("The document was loaded"); 
// }

//Events in JS
// firstcont.addEventListener('click', function(){
//     console.log("clicked on container");
// })

// firstcont.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// })

// firstcont.addEventListener('mouseout', function(){
//     console.log("mouse out of container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcont.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML =  prevHTML;
//     console.log("mouse up when clicked on container");
// })

// firstcont.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML =  "<b> We have Clicked </b>"
//     console.log("mouse down when clicked on container");
// })

// function summ(a,b){ //normal function
//     return a+b;
// }
summ = (a,b) =>{    //Arrow functions
    return a+b;
}
//setTimeout & setinterval
logKaro = () =>{
    document.querySelectorAll('.container')[1].innerHTML =  "<b>set timeout fired </b>"
    console.log("I'm your log");
}
// setTimeout(logKaro, 2000); //To schedule:- fun, time(ms)
// setInterval(logKaro, 2000); //To repeat same:- fun, time(ms)
// clr = setInterval(logKaro, 2000);
// use clearInterval/clearTimeout to   cancel setInterval/setTimeout

// JS localStorage
// localStorage
// Storage {length: 0}length: 0[[Prototype]]: Storage
// localStorage.setItem('name', 'Tejas');
// localStorage
// Storage {name: 'Tejas', length: 1}name: "Tejas"length: 1[[Prototype]]:
// localStorage.getItem('name')
// 'Tejas'
// localStorage.removeItem('name');
// localStorage.clear();

//JSON(JS object Notation):- only allow double quotes not single
obj = {name: "Tejas", length:1}
jso = JSON.stringify(obj);
// console.log(jso);
// console.log(obj);
// console.log(typeof jso);
// console.log(typeof obj);
// parsed = JSON.parse(`{name: "Tejas", length:1}`)
// console.log(parsed);

//Template literals - Backticks
a = 34;
console.log(`this is my ${addEventListener}`)