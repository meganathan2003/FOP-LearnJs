// let v = 5;
// let number="";
// for(i = 1; i<=v;  i++){
//     for(n = 1; n<=i; n++){
//         number += n + " ";
//     }
//     number += "\n";
// }
// console.log(number)

// const name_list = [
//     {
//         "name": "Arun",
//         "image": "https://ui-avatars.com/api/?name=Arun",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     },
//     {
//         "name": "Ajith",
//         "image": "https://ui-avatars.com/api/?name=Ajith",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     },
//     {
//         "name": "Bala",
//         "image": "https://ui-avatars.com/api/?name=Bala",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     },
//     {
//         "name": "Deva",
//         "image": "https://ui-avatars.com/api/?name=Deva",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     }

// ]

// name_list[-1] = { "name": "Surya"  };

// name_list[-1]["name"] = "Super star"

// console.log( name_list[0] );



/* ----------------------------------LEARNING JS ------------------------------- */

// bASIC THAT CONSOLE.LOG

// console.log("dinesh");

// A variable is contain a sotring data
// Two steps 
// 1. declare (var,let,const)
// 2. assignment (= assign operator)

//  let firstname = "dinesh"; // This also consider a string 
//  let age = "12"; // Consider a string 
//  let enroll = false;

//  console.log(firstname);
//  console.log(age);
//  console.log(enroll);

//  document.getElementById("name").innerHTML = "hello" + firstname;

/* Arthimetic operators with evaluted by value..
Opertors (+,-,%,)
 ex = x + 5;

*/

// let students = 100;
// students = students + 20;
// console.log(students);


/* How to accpet User input method in js  */

// EASY WAY WITHOUT A WINDOW PROMPT 

// let username = window.prompt("Here your name");
// console.log(username);

// Diffcult way to html text box 


// let username;

//  document.getElementById("submit").onclick = function(){
//     username  =  document.getElementById("myname").value;
//     console.log(username);
//  }

//-------------------------------- TYPE CONVERSION -----------------------------

// let age = window.prompt("enter your age");
// age += 1;
// console.log(age);

// age = Number(age)

// console.log(age, typeof (age));

// let a;
// let b;
// let c;

// a = Number("dinesh");
// b = String(3.14);
// c = Boolean("dinesh");

// console.log(a,typeof(a));


// ---------------------- CONST A VARIABLE THAT CAN'T BE CHANGED------------------------------

// const number = 19;

// console.log(19);

// number = 20;
// console.log(number);

// --------------------------- IN JS MATH OPERATION ----------------------------------------

// let x = 3.14;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.PI;
// x = Math.abs(x);
// x = Math.sqrt(x);

// let a = 10;
// let b = 5 ;
// let c = 9 ;
// let max;
// let min;

// max = Math.max(a,b,c);
// min = Math.min(a,b,c);
//  console.log(min);

// -------------------------------  FIND THE HYPOTENUSE IN JS --------------

// let a;
// let b;
// let c;

// a= window.prompt("enter the side of A");
// a = Number(a);

// b= window.prompt("enter the side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log("side of C :",c);

// Another way to show the number to the user 

// document.getElementById("btn").onclick = function () {
//     a = document.getElementById("Anumber").value;
//     a = Number(a);

//     b = document.getElementById("Bnumber").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//     document.getElementById("opt").innerHTML = 'C Side is :', c;
//     // console.log(c);

// };


// ----------------------------------- COUNTER PROGRAM  WRITE IN JS ---------------------

// let count = 0;

// document.getElementById("increase").onclick = function () {
//     count = count + 1;
//     document.getElementById("count").innerHTML = count;
// }
// document.getElementById("decrease").onclick = function () {
//     count = count - 1;
//     document.getElementById("count").innerHTML = count;
// }

// document.getElementById("reset").onclick = function () {
//     count = count = 0;
//     document.getElementById("count").innerHTML = count;
// }


// -------------------- USEFUL STRING PROPERTIES IN JS ----------- 

// let username = "  dinesh   ";

// console.log(username.charAt(0)); // This gave the value what index as a letter 
// console.log(username.indexOf("d")); // These also gave the index value but as a number
// console.log(username.length); // This will give you lenght of the character
// console.log(username.trim()); // This will trim the all unwanted spaces ...

// ------------------------ STRING SLICING IN JS --------------------

//  let myname = 'dinesh saran';
//  let firstname;
//  let lastname;

//  firstname = myname.slice(0,6);
// firstname = myname.slice(4);
// firstname = myname.slice(myname.indexOf(" ") +1);
//  console.log(firstname);

// --------------------------- METHOD CHAINING IN JS ------------------------

// let username = 'dinesh';
// let letter = username.charAt(0).toUpperCase().trim();
// console.log(letter);

// ---------------------------  IF STATEMENT IN JS ---------------------------

// let age = 50;

// if (age=>18){
//     console.log("your the major");
// }
// else if(a<0){
//     console.log("you're not born yet");
// }
// else{
// console.log("your are minor");
// }


// let online = false;
// if (online){
//     console.log("you're in online");
// }
// else{
//     console.log("you're in offline");
// }


// ---------------------------- CHECKED PROPERTY IN JS --------------------------

// document.getElementById("mybtn").onclick = function () {
//     const user_tick = document.getElementById("mycheckbox");
//     if (user_tick.Checked) {
//         console.log("user are subsribed ");
//     }
//     else{
//         console.log("user are not subscribe");
//     }

// };

// ---------------------------- WHILE LOOPS IN JS ------------

//  let username = 'mega';
//  while(username == 'mega'){
//   username = window.prompt("Enter your name");
//  }
//  console.log("Welcome",username);

// ---------------------------- BREAKS IN THE JS -------------------

// for(i = 0; i<=20; i++){
//     if(i == 15){
//         continue;
//     }
//     console.log(i);

// }

// ---------------------------- NESTED LOOPS ------------------

// let rows = window.prompt("Enter the n rows");
// let column = window.prompt("Enter the n column");
// for (i = 1; i < rows; i++) {
//     for (j = 1; j < column; j++) {
//         console.log(j);
//     }
//     console.log(i);

// }

// --------------- FUNCTION USING IN JS ---------------


// anotherfun();
// function anotherfun(){  
//     let name = 'dinesh';
//     let myage = 19;
//     wishes(name,myage );

// };
// function wishes(a,b){ // we gave the function name and pranthesis

//     console.log("happy birthday");
//     console.log("happy birthday");
//     console.log("happy birthday",a);
//     console.log("happy birthday");
//     console.log("happy birthday",b);
// };


// ----------------------- RETURN STATEMENT IN THE JS -----------------------------------------

// let area;
// let width;
// let height;

// width = window.prompt("Enter your width");
// height = window.prompt("Enter your height");

// area = valuearea(width, height); // That return statement return back to the value in area variable
// console.log("The area is :",area);

// function valuearea(width, height) {
//     return (width * height);
// };


/* ------------------------ Ternary operator shortcut of the if else condition ------------------- */

// let adult = checkage(21);

// console.log(adult);

// function checkage(age){
//    return age >= 18 ? true : false; // THIS LINE CHECK THE WHETHER AGE IS ABOVE 18 OR NOT 
// };


/* ------------------------ TEMPLATE LITREAL ------------------ */

// let name = "dinesh";
// let age = 19;

// console.log('Hello ${name} bro'); // This $ means that instead of that we use that direct calling name
// console.log('Your age is ${age} bro');


/* -------------------------- tolocale string in js keyword ---------------------- */

// let somenum = 12345678

// Numb = somenum.toLocaleString("en-us",{style:"currency" ,currency : "ind"}); // US english 

// console.log(Numb);

/* --------------------------   ARRAY IN JS  ----------------- */

// let fruits = ["apple", "banana", "mango"] // Square barces represent the array 

// console.log(fruits); 

// console.log(fruits[1]); // find the index value of the array

// console.log(fruits.indexOf("apple")); // This is one method to find the index 

// fruits[1] = "dinesh"; // WE CAN REPLACE THE VALUE 

// console.log(fruits);

// // HERE BELOW SOME METHODS 

// fruits.push("orange"); // Push a new element to the array
// fruits.pop(); // It will remove the last element 
// fruits.unshift("kiwi"); // It will add in the begin 
// console.log(fruits);
// fruits.shift();
// console.log(fruits); // It will remove the element in the first one 


/* ---------------------------------- SORT AN ARRAY IN STRING ----------------------*/

// let fruits = ["banana","mango","orange","apple","pineapple"];

// fruits = fruits.sort(); // THIS METHOD IS SORT THE ALL ELEMENT INSIDE THE ARRAY
// fruits = fruits.sort().reverse() ; 
//  console.log(fruits);


/* ------------------------------- 2D ARRAY IN JS --------------------------------- */

// let fruits = ["banana",'apple','mango'];
// let veg = ['carrot','beans','onion'];
// let meats = ['chicken','mutton','fish'];

// let grocerylist = [fruits,veg,meats]; // THIS IS 2D ARRAY INSIDE THE ANOTHER ARRAY
//  console.log(grocerylist);
// grocerylist[0][0] = "kiwi" ; // We can change the value also

//  for(let list of grocerylist){ // of method we used that calculate the  itreation and it automatically calculate the length of itreation 
//     for(food of list){
//         console.log(food);
//     };
//  };


/*-------------------------- SPREAD OPERATOER IN JS ------------------------------ */

// let number = [1,2,4,6,8,4,10,20];
// let maximum = Math.max(...number); // This three dot operator can unpack the array and spread it out
// console.log(maximum);


/*-------------------------- CALL BACK FUNCTION IN JS --------------------  */

// CALLBACK - A function passed as an arugement to another function

// ANOTHER METHOD TO CALLBACK FUNCTION

// let total = sum(2,3);
// callback(total); // BUT THE CALLBACK PARAMETER SHOULD BE THE PROPER ANSWERS 

// function sum(x,y){
//     let res = x + y;
//     return res;
// };

// function callback(totalres){ //  WHAT EVER WE WILL GIVE THE NAME IN THAT PARAMETER 
//     console.log(totalres);
// };



// REVERSE METHOD 

// sum(2,3,displayfunc); // We initalize a three parameter 

// function sum(x,y,callback){ // IN THIS PARAMETER WE USED A CALL BACK FUNCTION
//     let res = x + y;
//     callback(res);
// }

// function displayfunc(output){ // THIS ONE WE CALLED A CALL BACK FUNCTION..
//     console.log(output);
// }


/*-------------------------------------- ARRAY.FOREACH IN JS -------------------------- */












/* --------------------------------------------- ARRAY.MAP() -------------------------- */

// let numbers = [1,5,6,2,7,8,4];
// let squares = numbers.map(Square);

// squares.forEach(print); // if we give a squares array it will show the error because object and array does not exist
// function Square(element){
//     return Math.pow(element,2); 
// };

// function print(element){
//     console.log(element); // THIS ELEMENT RETURN TO THE VALUE TO SQUARES 
// };


/* -----------------------------------------   ARRAY.FILTER IN JS ------------------------------------ */

// let ages = [2,15,29,44,22,10];

// let adult = ages.filter(checkage);

// // adult.forEach(printadults); // THIS FUNCTION REPRESENT THE BELOW PRINTADULTS FUNCTION BY USING for each one by one 

// function checkage(major){
//     return major >=18
// };
// console.log(adult); // If we want like an array in output we use this log insetead the call back function

// function printadults(print){
//     console.log(print); // Oru oru vatiyum console log akum

// }


/* ------------------------------------- ARRAY REDUCE IN JS ---------------------------- > */

// let prices  = [12,43,67,86,45,54];
// let total_prices = prices.reduce(totalprice);  // REDUCE METHOD IS THE ARRAY VAULE REDUCED IN  NEW ARRAY

// console.log("The total price is:",total_prices);
// function totalprice(total,element){
//     return total +element;
// }


/* -------------------------------- SORT AN ARRAY OF NUMBERS -------------------------------- */

// for (let i = 0; i < 12; i++) {
//     console.log(i);
// }

// let arr = [10,4,5,8,20];
// let max = 0;
// let min = arr[0];
// let minimum ;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
//     if(arr[i] < min){
//         min = arr[i];
//         minimum = min; 
//     }
// }
// console.log(max);
// console.log(minimum);


// Below the code for factorial 

// let num = 5;
// let m = 1;
// for (let i = 1; i <= num; i++) {
//     m = m * i;
// }
// console.log(m);

// Find the eve number only  and sum it
// let arr = [2, 5, 6, 8, 10, 4];
// let even = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         even = arr[i] + even;
//     }
// }
// console.log(even);

// Pattern printing

// let str = "";
// for (let i = 0; i < 4; i++) {
//     str = str + i + 1;
//     console.log(str);
// }

//  5 row 5 columns
// for (let i = 0; i < 4; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + i;
//     }
//     console.log(str);
// }


// print the next number 
// for (let i = 0; i < 5; i++) {
//     let num = "";
//     for (let j = 0; j < 5; j++) {
//         num = num + (i + j);
//         console.log(num);
//     }
// }

// Arrays 

// let names = ["dinesh", "saran", "joel", "kingston"];
// let newname = [];
// // let namee=0;
// names.forEach((index, value) => {
//     names[index] = value.charAt(0).toUpperCase() + value.slice(1);
//     newname.push(names[index])
//     console.log(newname);
// })


// let names = ["denny", "dinesh", "joel", "dharun", "saran", "kingston"l];

// for (let i = 0; i < names.length; i++) {
//     names.pop(i);
//     console.log(names[i]);
// }

// FIND THE MAX VALUE 

let arr = [1,4,5,34,48]
// let max = 1;
// for(let i =0; i<arr.length; i++){
//     if(arr[i] > max){
//     max = arr[i]
//     }
// }
// console.log(max);


// let b = Math.max(...arr);
// console.log(b);
 let newarr = ["apple","orange","Mango"];
newarr.splice(0,1,"Banana");  // In splie method we can change the value itself  
console.log(newarr);



