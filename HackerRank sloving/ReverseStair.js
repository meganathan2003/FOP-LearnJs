/*  Reverse StairCase */


// function StairCase(n) {
//     let stair = "";
//     for (let i = 1; i <= n; i++) {
//         stair += ".".repeat(n - i) + "#".repeat(i) + "\n";
//     }
// console.log(stair);

// }
// StairCase(n);


let n = 6;
function staircase(n) {
    // Write your code here
    for (let i = n; i >= 1; i--) {
        let stair = "";
        for (let j = 1; j<= n; j++) {
            if (j > i-1) {
                stair += "#";
            }
            else{
                stair += ".";
            }
        }
        console.log(stair);
    }
}
staircase(n);


/* STRING / HASHMAP */
//  let a = "Meganathan";
//  let b = a.slice(4) // This is slice method and it consider the two parameters
//  console.log(b);

//  let myName = "meganathan";
//  console.log(myName.lastIndexOf("a"));

//  console.log(myName.length);

//  console.log(myName.charCodeAt(3)); // It returns the ASCII code 

// console.log(myName.charAt(2)); // It returns the value of string 

// let a  = "meganathan";
// let b  = a.slice(0,4);
// let c = a.slice(4,10);
// let opt = b + c;
// console.log();
// console.log(c);
// console.log(b);
